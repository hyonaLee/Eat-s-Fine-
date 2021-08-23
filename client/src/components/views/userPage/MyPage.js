import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Email from "./Email";
import Password from "./Password";
import DeleteUser from "./DeleteUser";
import styled from "styled-components";
const StyledDiv = styled.div`
  text-align: center;
  margin: 20px;
  padding-top: 5px;
  padding-bottom: 30px;
  border: 2px solid red;
  border-radius: 6px;
`;
const StyledInfo = styled.div`
  text-align: left;
  padding-left: 20px;
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
      <StyledInfo>
        <p>Id : {currentInfo.userid}</p>
        <p>Name : {currentInfo.name}</p>
        <div>
          <Email />
          <Password />
        </div>
        <br />
        <DeleteUser />
      </StyledInfo>
    </StyledDiv>
  );
}

export default MyPage;
