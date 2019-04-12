import { createMuiTheme } from "@material-ui/core/styles";
import indigo from "@material-ui/core/colors/indigo";

export default createMuiTheme({
  palette: {
    primary: { main: "#ef5350" },
    secondary: indigo // Indigo is probably a good match with pink
  },
  overrides: {
    MuiButton: {
      root: {
        color: "white",
        "&:hover": {
          color: "white",
          backgroundColor: "#b71c1c"
        }
      }
    }
  }
});
