import React from "react";
import { todoListStatsState } from "./src/atoms/atoms";
import { useRecoilValue } from "recoil";



function TodoListStats() {
  const {
    totalNum,
    totalCompletedNum,

  } = useRecoilValue(todoListStatsState);



  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>

     
    </ul>
  );
}

export default TodoListStats;
