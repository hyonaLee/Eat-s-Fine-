import React from "react";
import { useMapContext } from "../../../contexts/map_context";

function SearchNoResult() {
  const { setListExist } = useMapContext();
  setListExist(undefined);
  return (
    <div>
      <p>결과없음</p>
    </div>
  );
}

export default SearchNoResult;
