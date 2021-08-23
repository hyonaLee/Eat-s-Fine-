import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../../_actions/user_actions";
import styled from "styled-components";


function Comment({ id }) {
  const user = useSelector((state) => state.user);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onchangeText = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault(); //페이지 새로고침 안되게함

    const data = {
      storeid: id,
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
        <ComentInput type="textarea"
          onChange={onchangeText}
          value={text}
          placeholder="기대평, 후기 등 코멘트 작성공간"
        />
        <button onClick={onSubmit}>등록</button>
      </form>
    </div>
  );
}

const ComentInput = styled.input`
  width: 400px;
  border-radius: 5px;
  @media screen and (max-width: 768px) {
    width: 200px;
  }
  `

export default Comment;
