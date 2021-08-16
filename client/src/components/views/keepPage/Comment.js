import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addComment } from "../../../_actions/user_actions";
import SingleComment from "./SingleComment";
function Comment({ index }) {
  const user = useSelector((state) => state.user);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  console.log("코멘트인덱스",index)
  const onchangeText = (e) => {
    setText(e.target.value);
  };
  // console.log("코멘트의 리스트",list)
  const onSubmit = (e) => {
    console.log("등록버튼클릭 유저킵정보", user.userData.keep[index].id);
    e.preventDefault(); //페이지 새로고침 안되게함

    const data = {
      storeid: user.userData.keep[index].id,
      content: text,
      writer: user.userData._id,
    };
    console.log(data);
    dispatch(addComment(data));
    setText("");
  };

  return (
    <div>
      <form style={{ display: "flex" }} onSubmit>
        <textarea
          style={{ width: "400px", borderRadius: " 5px" }}
          onChange={onchangeText}
          value={text}
          placeholder="기대평, 후기 등 코멘트 작성공간"
        />
        <button onClick={onSubmit}>등록</button>
      </form>
    </div>
  );
}

export default Comment;
