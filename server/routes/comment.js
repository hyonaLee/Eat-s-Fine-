const express = require("express");
const router = express.Router();
const { Comment } = require("../models/Comment");

router.use(express.urlencoded({ extended: true }));

router.post("/saveComment", (req, res) => {
  const comment = new Comment(req.body);
  console.log("123", comment);

  comment.save((err, commnet)=>{
    if(err) return res.json({success:false, err})
    Comment.find({'_id':commnet._id})
      .populate('writer')
      .exec((err, result)=>{
        if(err) return res.json({success:false, err})
        res.status(200).json({ success:true, result})
      })
  })
});

module.exports = router;
