import React, { Component } from "react";
import Typography from "@mui/material/Typography";

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: "Loading",
    };
  }

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.state.loading === "Loading" + "..."
        ? this.setState({ loading: "Loading" })
        : this.setState(({ loading }) => ({ loading: loading + "." }));
    }, 100);
  }
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <Typography align="center" variant="h3" color="text.secondary">
        {this.state.loading}
      </Typography>
    );
  }
}
