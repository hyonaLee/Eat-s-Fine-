import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Divider, ListItem } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import "./Header.scss";
import Logo from "./Logo";
import MyPage from "../userPage/MyPage";

const useStyles = makeStyles({});

const HeaderDiv = styled.div`
  display: block;
  display: flex;
  justify-content: space-between;
  height: 40px;
  @media screen and (max-width: 768px) {
    height: 20px;
  }
`;

const HeaderStyle = styled.h2`
  margin: 20px;
  float: left;
  color: white;
  font-weight: bolder;
`;

const LogDiv = styled.div`
  float: right;
  color: white;
`;

const LogStyle = styled.h2`
  margin: 15px;
  float: right;
  color: white;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 1em;
    margin: 5px;
  }
`;

const HelloH2 = styled.h2`
  margin: 20px;
  color: gray;
  font-size: 20px;
  text-align: center;
`;

const StyledLi = styled.div`
  width: 300px;
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
  color: gray;
`;
const StyledLiLogOut = styled.div`
  margin: 20px;
  height: 50px;
  border-radius: 5px;
  background-color: #07beb8;
  text-align: center;
  padding-top: 20px;
  font-size: 20px;
  font-weight: bolder;
  color: white;
`;

function Header() {
  const user = useSelector((state) => state.user);
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {

    setState({ ...state, [anchor]: open });
  };

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

  const modalInfo = () => {
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
    >
      <HelloH2> {user.userData.name}님 안녕하세요.</HelloH2>
      <Divider />

      <div onClick={modalInfo} style={{ cursor: "pointer" }}>
        <StyledLi>
          <i className="material-icons">account_circle</i> 내정보
        </StyledLi>
      </div>

      {modal ? <MyPage /> : <div></div>}

      <Link to="/keep" onClick={toggleDrawer(anchor, false)}>
        <StyledLi>
          <i className="material-icons">favorite</i> 찜목록
        </StyledLi>
      </Link>
      <Link to="/">
        <StyledLiLogOut onClick={logoutHandler} className="logout">
          로그아웃
        </StyledLiLogOut>
      </Link>
    </div>
  );

  if (user.userData && user.userData.isAuth) {
    // setName(`${user.userData.name}님 안녕하세요.`);
    return (
      <HeaderDiv>
        <Link to="/">
          <Logo />
        </Link>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
        <LogDiv>
          <LogStyle onClick={toggleDrawer("right", true)}>
            <i className="material-icons">menu</i>
          </LogStyle>
        </LogDiv>
      </HeaderDiv>
    );
  } else {
    return (
      <HeaderDiv>
        <Link to="/">
          <Logo />
        </Link>
        <LogDiv>
          <Link to="/login">
            <LogStyle>로그인</LogStyle>
          </Link>
        </LogDiv>
      </HeaderDiv>
    );
  }
}

export default Header;
