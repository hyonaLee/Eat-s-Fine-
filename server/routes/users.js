const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { Keep } = require("../models/Keep");
const { User } = require("../models/User");

//auth라는 미들웨어 : 요청(get)받았을 때 콜백함수 하기전에 중간에서 실행
router.get("/auth", auth, (req, res) => {
  //미들웨어를 통과하면 이하 작업을 실행(Authentication이 true)
  res.status(200).json({
    // auth.js에서 user를 req에 넣었기 때문에 가능(req.user = user)
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true, //0 일반, 1 관리자
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
    keep: req.user.keep,
    history: req.user.history,
  });
});

router.post("/register", (req, res) => {
  const user = new User(req.body); //req.body로 json형식으로 파싱

  user.save((err, rslt) => {
    if (err) {
      return res.json({ success: false, err });
    } else {
      return res.status(200).json({ success: true });
    }
  });
});

router.post("/login", (req, res) => {
  //요청(입력)한 이메일이 디비에 있는지 찾음
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "입력한 이메일에 해당하는 유저가 존재하지 않음",
      });
    }
    //요청한 이메일이 디비에 있다면 요청한 비밀번호가 맞는 비밀번호인지 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 틀렸습니다.",
        });
      } else {
        //비밀번호도 맞는게 확인되면 토큰 생성
        user.createToken((err, user) => {
          if (err) return res.status(400).send(err);

          //쿠키에 토큰 저장
          res
            .cookie("x_auth", user.token)
            .status(200)
            .json({ loginSuccess: true, userID: user._id });
        });
      }
    });
  });
});

router.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ logoutSuccess: false, err });
    return res.status(200).send({ logoutSuccess: true });
  });
});

router.post("/addKeep", auth, (req, res) => {
  //User Collection에서 해당 유저의 정보가져오기
  User.findOne({ _id: req.user._id }, (err, userInfo) => {
    let duplicate = false;

    userInfo.keep.forEach((item) => {
      if (item.id === req.body.id) {
        duplicate = true;
      }
    });

    //가져온 정보에서 카트에다 넣으려하는 상품이 이미 들어있는지 확인

    //상품이 이미 있을때
    if (duplicate) {
      if (err) return res.status(400).json({ success: false, err });
      res.status(200).send(userInfo.keep);
    }
    //상품을 처음 등록할때
    else {
      User.findOneAndUpdate(
        { _id: req.user._id },
        {
          $push: {
            keep: {
              id: req.body.id,
              place_name: req.body.place_name,
              phone: req.body.phone,
              address_name: req.body.address_name,
              road_address_name: req.body.road_address_name,
              place_url: req.body.place_url,
              date: Date.now(),
            },
          },
        },
        { new: true },
        (err, userInfo) => {
          if (err) return res.status(200).json({ success: false, err });
          res.status(200).send(userInfo.keep);
        }
      );
    }
  });
});

//찜한거 선택해서 삭제
router.post("/deleteKeep", auth, (req, res) => {
  // User Collection에서 해당 유저의 정보가져오기
  User.findOne({ _id: req.user._id }, (err, userInfo) => {
    userInfo.keep.forEach((item) => {
      if (item.id === req.body.id) {
        User.findOneAndUpdate(
          { _id: req.user._id },
          {
            $pull: {
              keep: {
                id: req.body.id,
              },
            },
          },
          { new: true },
          (err, userInfo) => {
            if (err) return res.status(200).json({ success: false, err });
            res.status(200).send(userInfo.keep);
          }
        );
      }
    });
  });
});

module.exports = router;
