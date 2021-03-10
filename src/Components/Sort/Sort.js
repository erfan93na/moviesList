import { Box, Menu, MenuItem, Button } from "@material-ui/core";
import React, { useEffect } from "react";
const Sort = ({ setSortState, sortState }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (value) => {
    setSortState(value);
    // setAnchorEl(null);
  };

  return (
    <Box display="flex" p={3} justifyContent="flex-end">
      <Button
      
        onClick={handleClick}
      >
        Sort By Rate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleClose("DESC")}>Descending</MenuItem>
        <MenuItem onClick={() => handleClose("ASC")}>Ascending</MenuItem>
      </Menu>
    </Box>
  );
};

export default Sort;
