import React, { Component } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./App.css";
import Grid from "@material-ui/core/Grid";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs>
            <Header />
          </Grid>
          <Grid item xs>
            <SearchBar />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
