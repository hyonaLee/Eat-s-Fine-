import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeEmail } from "../../../_actions/user_actions";

function Email() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [stateChg, setStateChg] = useState(false);
  const [currentEmail, setCurrentEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");

  useEffect(() => {
    if (user.userData !== undefined) {
      setCurrentEmail(user.userData.email);
    }
  }, [user]);

  const onchangeText = (e) => {
    setText(e.target.value);
  };

  const emailChange = () => {
    setStateChg(true);
    const data = {
      email: text,
    };
    dispatch(changeEmail(data)).then((response) => {
      console.log("응답결과", response.payload.Success);
      console.log("받은 이메일 결과", response.payload.email);
      setNewEmail(response.payload.email);
    });
  };
  return (
    <div>
      이메일:{!stateChg ? currentEmail : newEmail}
      <textarea
        style={{ width: "400px", borderRadius: " 5px" }}
        onChange={onchangeText}
        value={text}
        placeholder="이메일 변경"
      />
      <button onClick={emailChange}>이메일변경</button>
    </div>
  );
}

export default Email;
