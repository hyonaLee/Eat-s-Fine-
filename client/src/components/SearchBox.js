import React, { useState, useEffect } from "react";
import { useApplicationContext } from "../contexts/application_context";

function SearchBox() {
  const [btnClicks, setBtnClicks] = useState(false);
  const [text, setText] = useState("");
  const { setLocationSearch } = useApplicationContext();

  function onchange(e) {
    setText(e.target.value);
    console.log("1",e.target.value);
  }
  function onclick() {
    if (text === "") {
      setLocationSearch(text);
    } else {
      setLocationSearch(text + "맛집");
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="지역 입력"
        onChange={onchange}
        value={text}
      />
      <input type="button" onClick={onclick} value="검색" />
      <p>{btnClicks}</p>
    </div>
  );
}

export default SearchBox;
