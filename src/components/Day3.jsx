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
  updateDetail = () => {
    let idanme = document.querySelector("#name").value;
    let idemail = document.querySelector("#email").value;
    let idedv = document.querySelector("#edu").value;
    this.setState({ Name: idanme, Email: idemail, Edu: idedv });
  };
  render() {
    return (
      <div>
        <h3 style={{ textDecoration: "underline" }}>Day3 Component</h3>
        <h4>User Detail</h4>
        <p>
          <span>
            Name:
            <input
              id="name"
              type="text"
              onChange={this.updateDetail}
              value=""
            ></input>
            <br></br>
          </span>
          <span>
            Email:
            <input id="email" type="text" value=""></input>
            <br></br>
          </span>
          <span>
            Education:
            <input id="edu" type="text" value=""></input>
            <br></br>
          </span>
          <span>
            <button onClick={this.updateDetail}>Update</button>
          </span>
        </p>
      </div>
    );
  }
}
