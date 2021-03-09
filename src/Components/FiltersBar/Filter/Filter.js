import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
} from "@material-ui/core";
import React from "react";
const Filter = React.memo(({ filterName }) => {
  console.log(3)
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box width={"100px"} px={2}>
      {" "}
      <FormControl fullWidth           variant="outlined"
>
        <InputLabel id="demo-simple-select-label">{filterName}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={"highest"}>Highest</MenuItem>
          <MenuItem value={"lowest"}>Lowest</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
})

export default Filter;
