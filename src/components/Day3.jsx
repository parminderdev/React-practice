import React from "react";
export default class Day3 extends React.Component {
  constructor() {
    super();
    this.state = {
      Name: "Parminder",
      Email: "parmmehra@gmail.com",
      Edu: "B.TECH CSE",
    };
  }
  function updateDetail() {
    this.setState({ Name: "Demo", Email: "demo@demo.com", Edu: "CSE" });
  }
  render() {
    return (
      <div>
        <h3 style={{ textDecoration: "underline" }}>Day3 Component</h3>
        <h4>User Detail</h4>
        <p>
          <span>
            Name:<input type="text" value={this.state.Name}></input>
            <br></br>
          </span>
          <span>
            Email: <input type="text" value={this.state.Email}></input>
            <br></br>
          </span>
          <span>
            Education: <input type="text" value={this.state.Edu}></input>
            <br></br>
          </span>
          <span>
            <button onClick={() => updateDetail()}>Update</button>
          </span>
        </p>
      </div>
    );
  }
}
