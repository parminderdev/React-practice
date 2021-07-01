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
        <div style={{ backgroundColor: "grey", margin: 20, padding: 20 }}>
          <h3>Form Handling with class component</h3>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref={this.nameEl} />
          </label>
          <input type="submit" name="Submit" />
        </form>
        <div style={{ backgroundColor: "grey", margin: 20, padding: 20 }}>
          <h3>Form Handling with function component</h3>
        </div>
        <LoginForm></LoginForm>
      </div>
    );
  }
}

function LoginForm(props) {
  const nameEl = React.useRef(null);
  const passwordEl = React.useRef(null);
  const rememberMeEl = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: nameEl.current.value,
      password: passwordEl.current.value,
      rememberMe: rememberMeEl.current.checked,
    };

    // Submit form details to login endpoint etc.
    // ...
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="username" ref={nameEl} />
      <input type="password" placeholder="password" ref={passwordEl} />
      <label>
        <input type="checkbox" ref={rememberMeEl} />
        Remember me
      </label>
      <button type="submit" className="myButton">
        Login
      </button>
    </form>
  );
}
