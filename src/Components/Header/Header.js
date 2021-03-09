import { Box, makeStyles, Grid,Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navLinkActive:{backgroundColor:theme.palette.primary.light,"&,&:visited":{color:"white"}},
  navLink:{display:"flex",justifyContent:"center",padding:"3rem",color:"black"}
}));
const Header = () => {
  const classes = useStyles();
  return (
    <Grid container>
     
        <Grid item md={6}>
          {" "}
            <NavLink to="/pageA" activeClassName={classes.navLinkActive} className={classes.navLink}>
              <Typography variant={"h4"}>Page A</Typography>
            </NavLink>
        </Grid>
        <Grid item  md={6}>
          <NavLink to="/pageB" activeClassName={classes.navLinkActive} className={classes.navLink}>
          <Typography variant={"h4"}>Page B</Typography>
          </NavLink>
      </Grid>
    </Grid>
  );
};

export default Header;
