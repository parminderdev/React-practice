import React from "react";
export default class Day3 extends React.Component {
  constructor(props) {
    super(props);
    this.nameEL = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    alert(this.nameEl.current.value);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref={this.nameEl} />
          </label>
          <input type="submit" name="Submit" />
        </form>
      </div>
    );
  }
}
