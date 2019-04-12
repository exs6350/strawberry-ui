import React, { Component } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
    };
  }

  render() {
    return (
      // <React.Fragment>
      //   <Grid container spacing={0}>
      //     <Grid item xs>
      //       <Header />
      //     </Grid>
      //   </Grid>
      //   <Grid
      //     container
      //     direction="column"
      //     spacing={0}
      //     alignItems="center"
      //     justify="center"
      //   >
      //     <Grid item xs={12}>
      //       <NavBar />
      //     </Grid>
      //   </Grid>
      // </React.Fragment>
      <div>
        <NavBar />
        <SignIn />
      </div>
    );
  }
}

export default App;
