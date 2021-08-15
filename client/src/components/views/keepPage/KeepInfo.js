import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteKeep } from "../../../_actions/user_actions";

function KeepInfo({ list }) {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data !== null) {
      console.log("123", data);
      dispatch(deleteKeep(data));
    }
    // KeepInfo();
  }, [data]);

  function listDelete(index) {
    list.splice(index, 1);
  }
  return (
    <div>
      <ul>
        {list.map((item, index) => (
          <li style={{ border: "1px solid black" }}>
            <div
              onClick={() =>
                window.open(`http://place.map.kakao.com/${item.id}`, "_blank")
              }
            >
              <span>{index + 1} </span>
              <span>주소: {item.address_name}</span>
              <span>도로명주소: {item.road_address_name}</span>
              <span>가게명: {item.place_name}</span>
              <span>전화번호: {item.phone}</span>
            </div>
            <div>
              <button
                onClick={() => {
                  setData(item);
                  listDelete(index);
                }}
              >
                삭제
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KeepInfo;
