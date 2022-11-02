import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "./src/atoms/atoms";
import { FormControl } from "@mui/material";
import Select from '@mui/material/Select';
import { InputLabel } from '@mui/material';
import { MenuItem } from '@mui/material';


function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <>
 Filter:
 <br></br> 
 <br></br>
<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Is it Completed?</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={""}
    label="Is it Completed?"
    onChange={updateFilter}
  >
    <MenuItem value="Show All">All</MenuItem>
    <MenuItem value="Show Completed">Completed</MenuItem>
  </Select>
</FormControl>
     </>
      
  );
}

export default TodoListFilters;
