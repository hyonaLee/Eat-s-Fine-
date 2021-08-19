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
  const [newPW, setNewPW] = useState("");
  const history = useHistory();
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
    dispatch(deleteUser(data)).then((response) => {
      if (response.payload.deleteSuccess) history.push("/login");
    });
  };

  return (
    <div>
      <textarea
        style={{ width: "400px", borderRadius: " 5px" }}
        onChange={onchangeText}
        value={text}
        placeholder="삭제하려면 비밀번호 입력"
      />
      <button onClick={submit}>계정삭제</button>
    </div>
  );
}

export default DeleteUser;
