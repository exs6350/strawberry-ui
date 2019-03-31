import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const styles = theme => ({
  card: {
    maxWidth: 400
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transfrom", {
      duration: theme.transitions.duration.shortest
    }),
    expandOpen: {
      transfrom: "rotate(180deg)"
    }
  }
});

class BusinessCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({
      expanded: !state.expanded
    }));
  };

  render() {
    const { classes, data } = this.props;

    return (
      <Card className={(classes, card)}>
        <CardHeader title={data.name} subheader={"Rating: " + data.rating} />
        <CardMedia className={(classes, media)} src={data.image_url} />
        <CardContent>
          <Typography Component="p">{data.url}</Typography>
        </CardContent>
        <CardActions className={(classes, actions)} disableActionSpacing>
          <IconButton
            className={classnames(classes, expand, {
              [classes.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={(this.state, expanded)}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={(this.state, expanded)} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Address: {data.display_address}
              Price: {data.price}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default withStyles(styles)(BusinessCard);
