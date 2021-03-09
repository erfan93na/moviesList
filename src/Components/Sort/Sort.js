import {Box,Menu,MenuItem,Button} from "@material-ui/core"
import React from "react"
const Sort = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
  return <Box display="flex" p={3} justifyContent="flex-end"><Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
 Sort By Price
</Button>
<Menu
  id="simple-menu"
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleClose}
>
  <MenuItem onClick={handleClose}>Lowest</MenuItem>
  <MenuItem onClick={handleClose}>Highest</MenuItem>
</Menu></Box>;
};

export default Sort;
