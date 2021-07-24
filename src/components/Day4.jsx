import React from "react";
// Click Event and functions calling using arrow functions
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
        <h1>Day4 Component by Parminder</h1>
        <h3>
          <b>Practice:how to use states in class component</b>
        </h3>
        <h2>Increment the state : {this.state.name}</h2>
        <button onClick={() => this.Apple()}>CLick Me</button>
      </div>
    );
  }
}
