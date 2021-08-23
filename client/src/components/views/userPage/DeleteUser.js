import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteUser } from "../../../_actions/user_actions";

function DeleteUser() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [stateChg, setStateChg] = useState(false);
  const [currentPW, setCurrentPW] = useState("");
  const [open, setOpen] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (user.userData !== undefined) {
      setCurrentPW(user.userData.password);
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

  const submit = () => {
    setStateChg(true);
    const data = {
      password: text,
    };
    dispatch(deleteUser(data)).then((response) => {
      if (!response.payload.deleteSuccess)
        alert("비밀번호가 올바르지 않습니다.");
      else {
        alert("계정이 삭제되었습니다.");
        history.push("/login");
      }
    });
  };

  return (
    <div>
      {!open ? (
        <button onClick={openTextarea}>회원탈퇴</button>
      ) : (
        <div>
          <textarea
            style={{ width: "400px", borderRadius: " 5px" }}
            onChange={onchangeText}
            value={text}
            placeholder="삭제하려면 비밀번호 입력"
          />
          <button onClick={submit}>삭제</button>
          <button onClick={closeTextarea}>취소</button>
        </div>
      )}
    </div>
  );
}

export default DeleteUser;
