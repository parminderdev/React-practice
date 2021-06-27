import React from "react";

class Day2 extends React.Component {
  constructor() {
    super();
    this.state = {
      Name: "Demo",
      Email: "Demo@demo.com",
    };
  }
  render() {
    return (
      <div style={{ backgroundColor: "grey", margin: 20 }}>
        <h3>My First Class Component</h3>
        <h4>
          Name :{this.state.Name === "Parm" ? this.state.Name : this.props.name}
        </h4>
        <h4>Email : {this.props.email}</h4>
        <button onClick={() => this.setState({ Name: "Parm" })}>
          Update The Name Using State
        </button>
      </div>
    );
  }
}

export default Day2;
