import React from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { withStyles } from "@material-ui/core/styles";
import { geolocated } from "react-geolocated";
import IconButton from "@material-ui/core/IconButton";

const styles = {
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 600,
    flexGrow: 1
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

class SearchBar extends React.Component {
  handleSearch = e => {
    let val = document.getElementById("search-bar").value;
    val = val.trim();

    if (val.length === 0) {
      return;
    }

    // make api call
    fetch().then(response => {
      this.props.onResults(response.json().body);
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root} elevation={4}>
        <InputBase
          className={classes.input}
          placeholder="Search Strawberry for delicious food"
          autoFocus={true}
          required={true}
          id="search-bar"
        />
        <IconButton className={classes.iconButton} onClick={this.handleSearch}>
          <SearchIcon />
        </IconButton>
      </Paper>
    );
  }
}

export default geolocated()(withStyles(styles)(SearchBar));
