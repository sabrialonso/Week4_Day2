import { useRecoilState } from "recoil";
import { todoListState } from "./src/atoms/atoms";
import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';


function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}


function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}


function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  
  const index = todoList.findIndex((listItem) => listItem === item);

 
  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };

 
  const toggleItemComplete = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  
  return (
    <div>
    <TextField type="text" value={item.text} onChange={editItemText} />
    <Checkbox checked={item.isComplete}
        onChange={toggleItemComplete} />
      <Button onClick={deleteItem}>Clear</Button>
    </div>
  );
}

export default TodoItem;
