import { Box, makeStyles, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navLinkActive: theme.palette.primary,
  navLink:{display:"flex",justifyContent:"center"}
}));
const Header = () => {
  const classes = useStyles();
  return (
    <Grid container>
     
        <Grid item md={6}>
          {" "}
          <Box justifyContent="center" p={10}>
            <NavLink to="/pageA" activeClassName={classes.navLinkActive} className={classes.navLink}>
              PageA
            </NavLink>
          </Box>
        </Grid>
        <Grid item  md={6}>
        <Box justifyContent="center" p={10}>
          <NavLink to="/pageB" activeClassName={classes.navLinkActive} className={classes.navLink}>
            PageB
          </NavLink>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
