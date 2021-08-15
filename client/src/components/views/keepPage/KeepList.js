import React from 'react'

function KeepList({list}) {
  return (
    <div>
    <ul>
      {list.map((item, index) => (
        <li
          style={{
            border: "1px solid black",
            cursor: "pointer",
            color: "black",
          }}
          key={item.index}
        >
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
            {/* <button
              onClick={() => {
                setData(item);
              }}
            >
              찜하기
            </button> */}
          </div>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default KeepList
