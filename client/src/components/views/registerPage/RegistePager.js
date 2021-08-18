import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_actions";

function Register(props) {
  const dispatch = useDispatch();

  const [Id, setId] = useState("");
  const [Email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [PasswordConfirm, setPasswordConfirm] = useState("");

  const onIdHandler = (e) => setId(e.currentTarget.value);
  const onEmailHandler = (e) => setEmail(e.currentTarget.value);
  const onNameHandler = (e) => setName(e.currentTarget.value);
  const onPasswordHandler = (e) => setPassword(e.currentTarget.value);

  const onPasswordConfirmHandler = (e) =>
    setPasswordConfirm(e.currentTarget.value);

  const onSubmitHandler = (e) => {
    e.preventDefault(); //login버튼 클릭했을때 페이지가 refresh 되는것을 막음
    if (Id.length < 4) {
      return alert("아이디는 4자리 이상 입력해주세요.");
    }
    if (Password.length < 4) {
      return alert("비밀번호는 4자리 이상 입력해주세요.");
    }
    if (Password !== PasswordConfirm) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }

    let data = {
      userid: Id,
      password: Password,
      name: Name,
      email: Email,
    };

    dispatch(registerUser(data)) //dispatch로 액션을 요청(user_action.js의 loginUser() 함수 호출)
      .then((response) => {
        if (response.payload.success) {
          alert("회원가입 성공");
          props.history.push("/login");
        } else {
          alert(response.payload.message);
        }
      });
  };

  const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div class="tile">
        <div class="tile-header">
          <span class="text">Register</span>
        </div>
        <div class="tile-body">
          <form id="form" onSubmit={onSubmitHandler}>
            <label class="form-input">
              {Id.length > 3 ? (
                <i class="material-icons" style={{ color: "#07beb8" }}>
                  person_add
                </i>
              ) : (
                <i class="material-icons">person_add</i>
              )}
              <input
                type="text"
                autofocus="true"
                value={Id}
                onChange={onIdHandler}
                required
              />
              <span class="label">ID</span>
              <span class="underline"></span>
            </label>

            <label class="form-input">
              {Name.length > 0 ? (
                <i class="material-icons" style={{ color: "#07beb8" }}>
                  sentiment_very_satisfied
                </i>
              ) : (
                <i class="material-icons">sentiment_neutral</i>
              )}

              <input
                type="text"
                autofocus="true"
                value={Name}
                onChange={onNameHandler}
                required
              />
              <span class="label">Name</span>
              <span class="underline"></span>
            </label>

            <label class="form-input">
              {Password.length > 3 ? (
                <i class="material-icons" style={{ color: "#07beb8" }}>
                  lock
                </i>
              ) : (
                <i class="material-icons">lock</i>
              )}

              <input
                type="password"
                value={Password}
                onChange={onPasswordHandler}
                required
              />
              <span class="label">Password</span>
              <span class="underline"></span>
            </label>

            <label class="form-input">
              {Password === PasswordConfirm && Password.length > 3 ? (
                <i class="material-icons" style={{ color: "#07beb8" }}>
                  check
                </i>
              ) : (
                <i class="material-icons">check</i>
              )}
              <input
                type="password"
                value={PasswordConfirm}
                onChange={onPasswordConfirmHandler}
                required
              />
              {Password !== PasswordConfirm ? (
                <span class="label" style={{ color: "red" }}>
                  Password Confirm
                </span>
              ) : (
                <span class="label">Password Confirm</span>
              )}
              {Password !== PasswordConfirm ? (
                <span
                  class="underline"
                  style={{ backgroundColor: "red" }}
                ></span>
              ) : (
                <span class="underline"></span>
              )}
            </label>

            <label class="form-input">
              {exptext.test(Email) === true ? (
                <i class="material-icons" style={{ color: "#07beb8" }}>
                  email
                </i>
              ) : (
                <i class="material-icons">email</i>
              )}

              <input
                type="email"
                autofocus="true"
                value={Email}
                onChange={onEmailHandler}
                required
              />
              <span class="label">Email</span>
              <span class="underline"></span>
            </label>

            <div class="submit-container clearfix">
              <button
                type="submit"
                class="btn btn-irenic float-right"
                style={{ border: "none", width: "90px" }}
              >
                회원가입
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
