import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const HeaderDiv = styled.div`
  display: block;
  display: flex;
  justify-content: space-between;
  height: 50px;
`;

const LogStyle = styled.h2`
  margin: 20px;
  float: right;
  color: white;
  font-weight: bolder;
  font-size: 20px;
`;

function Header() {
  
  const user = useSelector((state) => state.user);
  const logoutHandler = () => {
    axios.get("/api/users/logout").then((response) => {
      console.log(response.data);
      if (response.data.logoutSuccess) {
        window.location.replace("/");
      } else {
        alert("로그아웃 실패");
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <HeaderDiv>
        <Link to="/">
          <Logo />
        </Link>
        <div>
          <Link to="/login">
            <LogStyle>로그인</LogStyle>
          </Link>
          <Link to="/register">
            <LogStyle>회원가입</LogStyle>
          </Link>
        </div>
      </HeaderDiv>
    );
  } else {
    return (
      <HeaderDiv>
        <Link to="/">
          <Logo />
        </Link>
        <div>
          <Link to="/register">
            <LogStyle onClick={logoutHandler}>로그아웃</LogStyle>
          </Link>
          <Link to="/keep">
            <LogStyle>찜 목록</LogStyle>
          </Link>
        </div>
      </HeaderDiv>
    );
  }
}

export default Header;
