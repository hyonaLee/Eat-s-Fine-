import styled from "styled-components";
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
        <StyledBtn onClick={openTextarea}>비밀번호 변경</StyledBtn>
      ) : (
        <div style={{ textAlign: "right", paddingRight: "20px" }}>
          <input
            type="text"
            style={{ width: "210px", borderRadius: " 5px", height: "30px" }}
            onChange={onchangeText}
            value={text}
            placeholder="비밀번호 변경"
          />
          <br />
          <i
            className="material-icons done"
            style={{ position: "relative", top: "4px", cursor: "pointer" }}
            button
            onClick={submit}
          >
            done
          </i>
          <i
            className="material-icons cancel"
            style={{ position: "relative", top: "4px", cursor: "pointer" }}
            button
            onClick={closeTextarea}
          >
            close
          </i>
        </div>
      )}
    </div>
  );
}

const StyledBtn = styled.button`
  background-color: #07beb8;
  color: white;
  border: none;
  border-radius: 3px;
  width: 100px;
  height: 26px;
  cursor: pointer;
  :hover {
    filter: brightness(90%);
  }
`;

export default Password;
