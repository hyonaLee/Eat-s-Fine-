import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getKeepItems } from "../../../_actions/user_actions";
import KeepInfo from "./KeepInfo";

function KeepPage() {
  const user = useSelector((state) => state.user);
  const [list, setList] = useState([]);

  useEffect(() => {
    let arr = [];
    if (user.userData && user.userData.keep) {
      if (user.userData.keep && user.userData.keep.length > 0) {
        user.userData.keep.forEach((item) => {
          arr.push(item);
          setList(arr);
        });
      }
    }
  }, [user]);

  console.log("킵아이템들: ", list);

  return (
    <div>
      <KeepInfo list={list} />
    </div>
  );
}
export default KeepPage;
