import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { useState } from "react";
export default function Day7() {
  const [name, setName] = useState("");
  const [moviename, setMoviename] = useState("");
  const [termconditions, settermconditions] = useState(false);

  function getFromData(e) {
    e.preventDefault();
    //console.log(e);
    console.log(name, moviename, termconditions);
  }
  function clearData() {
    //alert("Clear Called");
    document.getElementById("myform").reset();
    //settermconditions(checked);
  }

  return (
    <Container>
      <Row>
        <Col xs={3}>
          <Sidebar></Sidebar>
        </Col>
        <Col xs={9}>
          <p>Form Submission Practice in Functionl Component</p>
          <form id="myform" onSubmit={getFromData}>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <br />
            <br />
            <label>Select the movie: </label>
            <select
              placeholder="select movie name"
              onChange={(e) => setMoviename(e.target.value)}
            >
              <option>Fast and Furious</option>
              <option>Avengers</option>
              <option>Titanic</option>
            </select>
            <br />
            <br />
            <input
              type="checkbox"
              onChange={(e) => settermconditions(e.target.checked)}
            ></input>
            <span>Accept term & Conditions</span>
            <br />
            <br />
            <input type="submit" value="SUBMIT"></input>
            <input type="button" value="CLEAR" onClick={clearData}></input>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
