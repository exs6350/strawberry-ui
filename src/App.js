import React, { Component } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./App.css";
import Grid from "@material-ui/core/Grid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };
  }

  render() {
    return (
      <>
        <Grid container spacing={0}>
          <Grid item xs>
            <Header />
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          spacing={0}
          alignItems="center"
          justify="center"
        >
          <Grid item xs={12}>
            <SearchBar />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default App;
