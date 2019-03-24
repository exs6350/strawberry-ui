import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import LocationIcon from "@material-ui/icons/MyLocation";

const styles = {
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
};

function SearchBar(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root} elevation={1}>
      <InputBase
        className={classes.input}
        placeholder="Search Strawberry for delicious food"
      />
      <IconButton className={classes.iconButton}>
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} />
      <InputBase className={classes.input} placeholder="Location" />
      <IconButton className={classes.iconButton}>
        <LocationIcon />
      </IconButton>
    </Paper>
  );
}

export default withStyles(styles)(SearchBar);
