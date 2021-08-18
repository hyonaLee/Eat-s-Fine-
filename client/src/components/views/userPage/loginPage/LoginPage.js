import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { MapContextProvider } from "../../../../contexts/map_context";
import { ApplicationContextProvider } from "../../../../contexts/weatherAndMap_context";
import { loginUser } from "../../../../_actions/user_actions";
import MapContainer from "../../kakaoMap/MapContainer";
import MapStoreList from "../../kakaoMap/MapStoreList";
import SearchBox from "../../landingPage/SearchBoxLocation";
import Weather from "../../landingPage/Weather";
import "./LoginPage.scss";
function Login(props) {
  const dispatch = useDispatch();

  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");

  const onIdHandler = (e) => setId(e.currentTarget.value);
  const onPasswordHandler = (e) => setPassword(e.currentTarget.value);

  const onSubmitHandler = (e) => {
    e.preventDefault(); //login버튼 클릭했을때 페이지가 refresh 되는것을 막음

    let data = {
      userid: Id,
      password: Password,
    };

    dispatch(loginUser(data)) //dispatch로 액션을 요청(user_action.js의 loginUser() 함수 호출)
      .then((response) => {
        //reducer 리턴 후 분기
        if (response.payload.loginSuccess) {
          props.history.push("/");
        } else {
          alert("Login error");
        }
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div className="tile">
        <div className="tile-header">
          <span className="text">Login</span>
        </div>
        <div className="tile-body">
          <form id="form" onSubmit={onSubmitHandler}>
            <label className="form-input">
              {Id.length > 3 ? (
                <i className="material-icons" style={{ color: "#07beb8" }}>
                  person
                </i>
              ) : (
                <i className="material-icons">person</i>
              )}
              <input
                type="text"
                autofocus="true"
                onChange={onIdHandler}
                required
              />
              <span className="label" value={Id}>
                ID
              </span>
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
              <input type="password" onChange={onPasswordHandler} required />
              <span className="label" value={Password}>
                Password
              </span>
              <div className="underline"></div>
            </label>

            <div className="submit-container clearfix">
              <button
                type="submit"
                className="btn btn-irenic float-right"
                style={{ border: "none", width: "90px" }}
              >
                로그인
              </button>
              <Link to="/register">
                <span className="registerHover" style={{ fontSize: "12px" }}>
                  아직 회원이 아닌가요?
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
