import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
} from "@material-ui/core";
import React from "react";
import { FiltersContext } from "../../../FiltersContext";
const Filter = (({ filterName }) => {
  const [filtersState, setFiltersState] = React.useContext(FiltersContext);

  const handleChange = (event) => {
    setFiltersState({ filterName: filterName, value: event.target.value });
  };

  return (
    <Box width={"100px"} px={2}>
      {" "}
      <FormControl fullWidth variant="outlined">
        <InputLabel id="demo-simple-select-label">{filterName}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filtersState.value}
          onChange={handleChange}
        >
          <MenuItem value={"highest"}>Highest</MenuItem>
          <MenuItem value={"lowest"}>Lowest</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
});

export default Filter;
