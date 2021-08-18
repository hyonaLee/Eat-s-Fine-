import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../../_actions/user_actions";

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
      <div className="tile">
        <div className="tile-header">
          <span className="text">Register</span>
        </div>
        <div className="tile-body">
          <form id="form" onSubmit={onSubmitHandler}>
            <label className="form-input">
              {Id.length > 3 ? (
                <i className="material-icons" style={{ color: "#07beb8" }}>
                  person_add
                </i>
              ) : (
                <i className="material-icons">person_add</i>
              )}
              <input
                type="text"
                autofocus="true"
                value={Id}
                onChange={onIdHandler}
                required
              />
              <span className="label">ID</span>
              <span className="underline"></span>
            </label>

            <label className="form-input">
              {Name.length > 0 ? (
                <i className="material-icons" style={{ color: "#07beb8" }}>
                  sentiment_very_satisfied
                </i>
              ) : (
                <i className="material-icons">sentiment_neutral</i>
              )}

              <input
                type="text"
                autofocus="true"
                value={Name}
                onChange={onNameHandler}
                required
              />
              <span className="label">Name</span>
              <span className="underline"></span>
            </label>

            <label className="form-input">
              {Password.length > 3 ? (
                <i className="material-icons" style={{ color: "#07beb8" }}>
                  lock
                </i>
              ) : (
                <i className="material-icons">lock</i>
              )}

              <input
                type="password"
                value={Password}
                onChange={onPasswordHandler}
                required
              />
              <span className="label">Password</span>
              <span className="underline"></span>
            </label>

            <label className="form-input">
              {Password === PasswordConfirm && Password.length > 3 ? (
                <i className="material-icons" style={{ color: "#07beb8" }}>
                  check
                </i>
              ) : (
                <i className="material-icons">check</i>
              )}
              <input
                type="password"
                value={PasswordConfirm}
                onChange={onPasswordConfirmHandler}
                required
              />
              {Password !== PasswordConfirm ? (
                <span className="label" style={{ color: "red" }}>
                  Password Confirm
                </span>
              ) : (
                <span className="label">Password Confirm</span>
              )}
              {Password !== PasswordConfirm ? (
                <span
                  className="underline"
                  style={{ backgroundColor: "red" }}
                ></span>
              ) : (
                <span className="underline"></span>
              )}
            </label>

            <label className="form-input">
              {exptext.test(Email) === true ? (
                <i className="material-icons" style={{ color: "#07beb8" }}>
                  email
                </i>
              ) : (
                <i className="material-icons">email</i>
              )}

              <input
                type="email"
                autofocus="true"
                value={Email}
                onChange={onEmailHandler}
                required
              />
              <span className="label">Email</span>
              <span className="underline"></span>
            </label>

            <div className="submit-container clearfix">
              <button
                type="submit"
                className="btn btn-irenic float-right"
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
