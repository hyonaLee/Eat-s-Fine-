import axios from "axios";
import { response } from "express";
import React, { useEffect } from "react";

function Keep({ item }) {
  useEffect(() => {
    console.log("킵정보", item);
    // axios.post('/api/keep/keepNumber')
    //   .then(response => {
    //     if(response.data.success){

    //     } else {
    //       console.log("킵실패")
    //     }
    //   })
  }, [item]);

  return (
    <div>
      <button>찜하기</button>
    </div>
  );
}

export default Keep;
