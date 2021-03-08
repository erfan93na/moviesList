import {Button,Menu,MenuItem} from "@material-ui/core"
import React from "react"
const Filter = ({filterName}) =>  {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = (filterOrder) => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <Button aria-controls="filter-menu" aria-haspopup="true" onClick={handleClick}>
{filterName}
        </Button>
        <Menu
          id="filter-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={()=>handleClose("Highest")}>Highest</MenuItem>
          <MenuItem onClick={()=>handleClose("Lowest")}>Lowest</MenuItem>
        </Menu>
      </div>
    );
  }
 
export default Filter;