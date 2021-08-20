import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Email from "./Email";
import Password from "./Password";
import DeleteUser from "./DeleteUser";

function MyPage() {
  const user = useSelector((state) => state.user);
  const [currentId, setCurrentId] = useState("");
  const [currentName, setCurrentName] = useState("");

  useEffect(() => {
    if (user.userData !== undefined) {
      setCurrentId(user.userData.userid);
      setCurrentName(user.userData.name);
    }
  }, [user]);

  return (
    <div>
      <p>아이디: {currentId}</p>
      <p>이름: {currentName}</p>
      <Email />
      <Password />
      <DeleteUser />
    </div>
  );
}

export default MyPage;
