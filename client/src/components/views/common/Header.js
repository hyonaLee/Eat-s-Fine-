import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderDiv = styled.div`
// display:block;
`;

const HeaderStyle = styled.h1`
margin: 20px;
float: left;
color: white;
font-weight: bolder;
`

const LogDiv = styled.div`
float: right;
color: white;
`;

const LogStyle = styled.h1`
margin: 20px;
float: left;
color: white;
font-weight: bolder;
font-size: 20px;
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
      <HeaderDiv>
        {user.userData && !user.userData.isAuth ? (
          <div>
            <Link to="/"><HeaderStyle>Eat's Fine!</HeaderStyle></Link>
            <LogDiv>
              <Link to="/login"><LogStyle>로그인</LogStyle></Link>
              <Link to="/register"><LogStyle>회원가입</LogStyle></Link>
            </LogDiv>
          </div>
        ) : (
          <StyledHeaderLink onClick={logoutHandler}>로그아웃</StyledHeaderLink>
        )}
      </HeaderDiv>
  );
}

export default Header;
