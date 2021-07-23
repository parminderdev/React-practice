import React from "react";
// Click Event and functions
// State in class component
export default class Day4 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 1,
    };
  }
  Apple() {
    this.setState({ name: this.state.name + 1 });
  }
  render() {
    // function NewCompoen() {
    //   return <div>New Functional Component inside of class component</div>;
    // }

    return (
      <div>
        <h1>Day4 Component by {this.state.name}</h1>
        <button onClick={() => this.Apple()}>CLick Me</button>
      </div>
    );
  }
}
