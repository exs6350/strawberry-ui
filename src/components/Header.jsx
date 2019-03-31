import React from "react";
// import SvgIcon from "@material-ui/icons/FavoriteBorder";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    flexGrow: 1
  },
  heading: {
    margin: "auto"
  }
};

function Header(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography
            className={classes.heading}
            variant="h2"
            color="secondary"
          >
            Strawberry
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header);
