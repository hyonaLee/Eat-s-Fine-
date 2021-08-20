import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Email from "./Email";
import Password from "./Password";
import DeleteUser from "./DeleteUser";
import styled from "styled-components";
const StyledDiv = styled.div`
  text-align: center;
  margin-top: 150px;
`;

function MyPage() {
  const user = useSelector((state) => state.user);
  const [currentInfo, setCurrentInfo] = useState("");

  useEffect(() => {
    if (user.userData !== undefined) {
      setCurrentInfo(user.userData);
    }
  }, [user]);

  return (
    <StyledDiv>
      <p>아이디: {currentInfo.userid}</p>
      <p>이름: {currentInfo.name}</p>
      <Email />
      <Password />
      <DeleteUser />
    </StyledDiv>
  );
}

export default MyPage;
