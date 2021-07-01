import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeaderDiv = styled.div`
  display: flex;
  height: 80px;
  background-color: black;
  ul {
    list-style: none;
  }
  display: flex;
  justify-content: flex-end;
`;
const StyledHeaderLink = styled(Link)`
  //react-router-dom의 Link를 상속
  color: white;
  font-size: 20px;
  text-decoration: none;
  line-height: 80px;
  padding-right: 10px;

`;

function Header(props) {
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

  return (
    <div>
      <h1>header입니다.</h1>
      <StyledHeaderDiv>
        <StyledHeaderLink to="/">Home</StyledHeaderLink>
        {user.userData && !user.userData.isAuth ? (
          <StyledHeaderDiv>
            <StyledHeaderLink to="/login">로그인</StyledHeaderLink>
            <StyledHeaderLink to="/register">회원가입</StyledHeaderLink>
          </StyledHeaderDiv>
        ) : (
          <StyledHeaderLink onClick={logoutHandler}>로그아웃</StyledHeaderLink>
        )}
      </StyledHeaderDiv>
      <hr />
    </div>
  );
}

export default Header;
