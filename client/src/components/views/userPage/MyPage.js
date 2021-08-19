import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEmail,
  changePassword,
  deleteUser,
} from "../../../_actions/user_actions";

function MyPage() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const onchangeText = (e) => {
    setText(e.target.value);
  };

  const emailChange = (e) => {
    e.preventDefault(); //페이지 새로고침 안되게함

    const data = {
      user: user.userData._id,
      email: text,
    };
    console.log(data);
    dispatch(changeEmail(data));
  };
  const passwordChange = (e) => {
    e.preventDefault(); //페이지 새로고침 안되게함

    const data = {
      user: user.userData._id,
      password: text,
    };
    console.log(data);
    dispatch(changePassword(data));
  };
  const memberWithdrawal = (e) => {
    e.preventDefault(); //페이지 새로고침 안되게함

    const data = {
      user: user.userData._id,
      pw: user.userData.password,
      id: text,
    };
    console.log(data);
    dispatch(deleteUser(data));
  };

  if (user.userData && user.userData.isAuth) {
    console.log(user.userData);
    return (
      <div>
        <p>이름 : {user.userData.name}</p>
        <p>아이디 : {user.userData.userid}</p>
        <p>Email : {user.userData.email}</p>

        <textarea
          style={{ width: "400px", borderRadius: " 5px" }}
          onChange={onchangeText}
          value={text}
          placeholder="기대평, 후기 등 코멘트 작성공간"
        />
        <button onClick={emailChange}>이메일변경</button>
        <button onClick={passwordChange}>비밀번호 변경</button>
        <button onClick={memberWithdrawal}>회원 탈퇴</button>
      </div>
    );
  } else {
    return <></>;
  }
}

export default MyPage;
