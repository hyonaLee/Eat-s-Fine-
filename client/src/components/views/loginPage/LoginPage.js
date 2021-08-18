import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MapContextProvider } from "../../../contexts/map_context";
import { ApplicationContextProvider } from "../../../contexts/weatherAndMap_context";
import { loginUser } from "../../../_actions/user_actions";
import MapContainer from "../kakaoMap/MapContainer";
import MapStoreList from "../kakaoMap/MapStoreList";
import SearchBox from "../landingPage/SearchBoxLocation";
import Weather from "../landingPage/Weather";
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
      <div class="tile">
        <div class="tile-header">
          <span class="text">Login</span>
        </div>
        <div class="tile-body">
          <form id="form" onSubmit={onSubmitHandler}>
            <label class="form-input">
              {Id.length > 3 ? (
                <i class="material-icons" style={{ color: "#07beb8" }}>
                  person
                </i>
              ) : (
                <i class="material-icons">person</i>
              )}
              <input
                type="text"
                autofocus="true"
                onChange={onIdHandler}
                required
              />
              <span class="label" value={Id}>
                ID
              </span>
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
              <input type="password" onChange={onPasswordHandler} required />
              <span class="label" value={Password}>
                Password
              </span>
              <div class="underline"></div>
            </label>
            <div class="submit-container clearfix">
              <button
                type="submit"
                class="btn btn-irenic float-right"
                style={{ border: "none", width: "90px" }}
              >
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
