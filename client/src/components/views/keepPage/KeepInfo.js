import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteKeep } from "../../../_actions/user_actions";
import styled from "styled-components";
import Comment from "./Comment"


function KeepInfo({ list }) {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data !== null) {
      dispatch(deleteKeep(data));
    }
  }, [data]);

  function listDelete(index) {
    list.splice(index, 1);
  }

  return (
    <AllDiv>
      <HeadH3>찜 목록</HeadH3>
        <ResultListUl>
          {list.map((item, index) => (
            <ResultListLi>
              <AllHeartListDiv>
                  <ResultDiv>
                    <div onClick={() => window.open(`http://place.map.kakao.com/${item.id}`, "_blank")} >
                      <span><b>{index + 1}. </b></span>
                      <span><strong>{item.place_name}</strong></span><br />
                      <span>{item.road_address_name}</span><br />
                      <span> ({item.address_name})</span><br />
                      <span>☎ {item.phone}</span>
                      <span>코멘트: {item.comment}</span>
                      </div>
                      <Comment id={item.id} />
                  </ResultDiv>
                  <delBtnDiv>
                        <delBtn onClick={() => {
                                        setData(item);
                                        listDelete(index);
                                      }}
                                    >삭제
                        </delBtn>
                  </delBtnDiv>
              </AllHeartListDiv>
            </ResultListLi>
          ))}
        </ResultListUl>
    </AllDiv>
  );
}

const AllDiv = styled.div`
  padding-left: 5px;
`
const ResultDiv = styled.div`
  padding-left: 5px;
`
const AllHeartListDiv = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 22px;
  @media screen and (max-width: 768px) {
    font-size: 10px;
    line-height: 12px;
}
`;

const ResultListUl = styled.ul`
  list-style: none;
  width: 600px;
  margin: auto;
  @media screen and (max-width: 768px) {
    width: 500px;
}
`;

const ResultListLi = styled.li`
  cursor: pointer;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  color: black;
  padding: 10px;
`;


const HeadH3 = styled.h3`
text-align: center;
`;
const delBtnDiv = styled.div`
`;
const delBtn = styled.button`
`;


export default KeepInfo;
