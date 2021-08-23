import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../../_actions/user_actions";

function Password() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [stateChg, setStateChg] = useState(false);
  const [currentPW, setCurrentPW] = useState("");
  const [newPW, setNewPW] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (user.userData !== undefined) {
      setCurrentPW(user.userData.password);
    }
  }, [user]);

  const openTextarea = () => {
    setText("");
    setOpen(true);
  };

  const closeTextarea = () => {
    setOpen(false);
  };

  const onchangeText = (e) => {
    setText(e.target.value);
  };

  const submit = () => {
    if (text.length < 4) {
      alert("비밀번호는 4자리 이상만들어주세요.");
    } else {
      setStateChg(true);
      const data = {
        password: text,
      };
      dispatch(changePassword(data)).then((response) => {
        console.log("응답결과", response.payload.Success);
        console.log("받은 비밀번호 결과", response.payload.password);
        setNewPW(response.payload.password);
        alert("비밀번호 변경 완료");
        setOpen(false);
      });
    }
  };

  return (
    <div style={{ paddingTop: "8px" }}>
      {!open ? (
        <button onClick={openTextarea}>비밀번호 변경</button>
      ) : (
        <div style={{ textAlign: "right", paddingRight: "20px" }}>
          <textarea
            style={{ width: "210px", borderRadius: " 5px" }}
            onChange={onchangeText}
            value={text}
            placeholder="비밀번호 변경"
          />
          <br />
          <button onClick={submit}>변경</button>
          <button onClick={closeTextarea}>취소</button>
        </div>
      )}
    </div>
  );
}

export default Password;
