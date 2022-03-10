import React, { Component } from "react";
const styles = {
  content: {
    fontSize: "35px",
    position: "absolute",
    left: "0",
    right: "0",
    marginTop: "20px",
    textAlign: "center",
  },
};

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
    return <p style={styles.content}>{this.state.loading}</p>;
  }
}
