import React, { Component } from "react";
import PropTypes from "prop-types";

class Day9 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Anil",
    };
    console.log("Day 9 Practice for life cycle");
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return <div>{this.state.data}</div>;
  }
}

Day9.propTypes = {};

export default Day9;
