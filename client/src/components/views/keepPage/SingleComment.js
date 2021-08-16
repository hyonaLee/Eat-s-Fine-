import React from 'react'
import { useSelector } from "react-redux";

function SingleComment({index}) {
  const user = useSelector((state) => state.user);
  return (
    <div>
      SingleComment
      <div>{user.userData.keep[index].comment}</div>
    </div>
  )
}

export default SingleComment
