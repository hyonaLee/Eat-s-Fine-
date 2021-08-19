import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  changePassword,
  deleteUser,
} from "../../../_actions/user_actions";

function Password() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [stateChg, setStateChg] = useState(false);
  const [currentPW, setCurrentPW] = useState("");
  const [newPW, setNewPW] = useState("");

  useEffect(() => {
    if (user.userData !== undefined) {
      setCurrentPW(user.userData.password);
    }
  }, [user]);

  const onchangeText = (e) => {
    setText(e.target.value);
  };

  const submit = () => {
    setStateChg(true);
    const data = {
      password: text,
    };
    dispatch(changePassword(data)).then((response) => {
      console.log("응답결과", response.payload.Success);
      console.log("받은 비밀번호 결과", response.payload.password);
      setNewPW(response.payload.password);
    });
  };

  return (
    <div>
      {!stateChg ? currentPW : newPW}
      <textarea
        style={{ width: "400px", borderRadius: " 5px" }}
        onChange={onchangeText}
        value={text}
        placeholder="비밀번호 변경"
      />
      <button onClick={submit}>비밀번호변경</button>
    </div>
  );
}

export default Password;
