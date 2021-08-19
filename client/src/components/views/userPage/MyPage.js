import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Email from "./Email";
import Password from "./Password";
import DeleteUser from "./DeleteUser";

function MyPage() {
  const user = useSelector((state) => state.user);
  const [currentName, setCurrentName] = useState("");

  useEffect(() => {
    if (user.userData !== undefined) {
      setCurrentName(user.userData.name);
    }
  }, [user]);

  return (
    <div>
      <p>이름: {currentName}</p>
      <Email />
      <Password />
      <DeleteUser />
    </div>
  );
}

export default MyPage;
