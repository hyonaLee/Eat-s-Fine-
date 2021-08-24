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
                      <Span><b>{index + 1}. </b></Span>
                      <Span><strong>{item.place_name}</strong></Span><br />
                      <span>{item.road_address_name}</span><br />
                      <span> ({item.address_name})</span><br />
                      <span>☎ {item.phone}</span><br />
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
  color: #545352;
`
const ResultDiv = styled.div`
  color: #545352;
`
const AllHeartListDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  line-height: 30px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
    line-height: 20px;
}
`;

const ResultListUl = styled.ul`
  list-style: none;
  padding: 0;
}
`;

const ResultListLi = styled.li`
  font-weight: bold;
  width: 700px;
  margin: auto;
  cursor: pointer;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  padding: 20px;
  @media screen and (max-width: 768px) {
    width: 500px;
  }
  @media screen and (max-width: 500px) {
    width: 300px;
  }
`;


const HeadH3 = styled.h3`
font-size: 25px;
text-align: center;
@media screen and (max-width: 768px) {
  font-size: 18px;
  }
`;
const delBtnDiv = styled.div`

`;
const delBtn = styled.button`

`;
const Span = styled.span`
  font-size: 1.3em;
  color: black;
`;

export default KeepInfo;
