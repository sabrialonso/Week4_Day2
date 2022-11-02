import { useSetRecoilState } from "recoil";
import { todoListState } from "./src/atoms/atoms";;
import { useState } from "react";
import React from "react";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";


function adder() {
  let num = 2;
  function numAdder() {
    return num++;
  }
  return numAdder;
}

const getId = adder();


function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
 
  const setTodolist = useSetRecoilState(todoListState);


  const addTodoItem = () => {
    setTodolist((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
   
    setInputValue("");
  };


  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
    <TextField type="text" value={inputValue} onChange={onChange} />
      <Button onClick={addTodoItem}> Add Task</Button>
    </div>
  );
}

export default TodoItemCreator;
