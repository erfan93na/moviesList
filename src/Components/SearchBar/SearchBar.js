import {makeStyles, TextField, Box } from "@material-ui/core";
const useStyles=makeStyles({
  textField:{"& .MuiInputBase-root":{color:"white"}}
})
const SearchBar = ({ handleSearchFieldChange }) => {
  const classes=useStyles()
  return (
    <Box bgcolor="info.light" boxShadow px={3} py={3} display="flex" justifyContent="center">
        <Box width={1/2}> <TextField
        className={classes.textField}
      fullWidth
      variant="filled"
      onChange={handleSearchFieldChange}
    /></Box>
     
    </Box>
  );
};

export default SearchBar;
