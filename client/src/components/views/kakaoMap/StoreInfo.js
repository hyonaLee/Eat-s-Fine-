import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addKeep } from "../../../_actions/user_actions";
import styled from "styled-components";

function StoreInfo({ list }) {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data !== null) {
      console.log("찜한 정보", data);
      dispatch(addKeep(data));
    }
  }, [data]);

  return (
    <ResultListDiv>
      <HeadDiv>
        <HeadH3>검색결과</HeadH3>
      </HeadDiv>
      <ResultListUl>
        {list.map((item, index) => (
          <ResultListLi key={item.index}>
            <ListDiv
              onClick={() =>
                window.open(`http://place.map.kakao.com/${item.id}`, "_blank")
              }
            >
              <div>
              <span><b>{index + 1}. </b></span>
              <span><strong>{item.place_name}</strong></span><br/>
              <span>{item.road_address_name}</span><br/>
              <span> ({item.address_name})</span><br/>
              <span>☎ {item.phone}</span>
              </div>
              <LikeBtn
                onClick={() => {
                  setData(item);
                }}
              >
                찜하기
              </LikeBtn>
              </ListDiv>
          </ResultListLi>
        ))}
      </ResultListUl>
    </ResultListDiv>
  );
}
const ResultListDiv = styled.div`
  display: block;
  width: 400px;
  height: 900px;
  line-height: 23px;
  margin-top: 30px;
  background-color: #e0e0e0;
  overflow: scroll;
`
const HeadDiv = styled.div`
  background-color: #bdbdbd;
  height: 60px;
  padding: 10px;
  padding-left: 20px;
`
const HeadH3 = styled.h3`
  color: black;
`
const ResultListUl = styled.ul`
 list-style: none;
 margin: 0px;
 padding: 0;
 `
 const ResultListLi = styled.li`
  cursor: pointer;
  border: 1px solid gray;
  color: black;
  padding: 8px;
  :hover{
    box-shadow: 0px 0px 10px gray;
  }
 `
const ListDiv = styled.div`
display: flex;
justify-content: space-between;
`
const LikeBtn = styled.button`
 height: 20px;
 `

export default StoreInfo;
