const express = require("express");
const { Keep } = require("../models/Keep");
const router = express.Router();

router.use(express.urlencoded({ extended: true }));

router.get("/id", (req, res) => {
  let type = req.query.type;
  let id = req.query.id;

  if (type === "array") {
    let ids = req.query.id.split(",");
    id = ids.map((itme) => {
      return item;
    });
  }

  Keep.find({ _id: { $in: id } })
    .populate("writer")
    .exec((err, keep) => {
      if (err) return res.status(200).json({ success: false, err });
      res.status(200).send(userInfo.keep);
    });
});

module.exports = router;
