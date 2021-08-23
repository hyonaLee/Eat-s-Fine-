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
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (user.userData !== undefined) {
      setCurrentEmail(user.userData.email);
    }
  }, [user]);

  const openTextarea = () => {
    setOpen(true);
  };

  const closeTextarea = () => {
    setOpen(false);
  };

  const onchangeText = (e) => {
    setText(e.target.value);
  };

  const emailChange = () => {
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    if (exptext.test(text)) {
      setStateChg(true);
      const data = {
        email: text,
      };
      dispatch(changeEmail(data)).then((response) => {
        console.log("응답결과", response.payload.Success);
        console.log("받은 이메일 결과", response.payload.email);
        setNewEmail(response.payload.email);
        alert("이메일 변경 완료");
        setOpen(false);
      });
    } else {
      alert("이메일 양식이 맞지 않음.");
    }
  };
  return (
    <div className="tile-body">
      Email : {!stateChg ? currentEmail : newEmail}
      <br />
      <div style={{paddingTop:"5px"}}>
        {!open ? (
          <button onClick={openTextarea}>이메일 변경</button>
        ) : (
          <div style={{ paddingTop: "8px" }}>
            <input
              type="email"
              style={{ width: "210px", borderRadius: " 5px" }}
              onChange={onchangeText}
              value={text}
              placeholder="이메일 변경"
            />
            <br />
            <div
              style={{
                paddingTop: "8px",
                textAlign: "right",
                paddingRight: "20px",
              }}
            >
              <button onClick={emailChange}>변경</button>
              <button onClick={closeTextarea}>취소</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Email;
