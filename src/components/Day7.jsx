import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { useState } from "react";
export default function Day7() {
  const [name, setName] = useState("");

  const [moviename, setMoviename] = useState("");
  const [termconditions, settermconditions] = useState(false);
  const [fulldata, setFulldata] = useState([]);

  function getFromData(e) {
    e.preventDefault();
    //console.log(e);
    console.log(name, moviename, termconditions);
    setName("");
    setMoviename("");
    settermconditions("");
    setFulldata(name, moviename, termconditions);

    // document.getElementById("n").innerHTML = name;
    // document.getElementById("m").innerHTML = moviename;
    // document.getElementById("t").innerHTML = termconditions;
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
      <Row>
        <Col xs={3}></Col>
        <Col xs={9}>
          <p>Data Entered</p>
          <br />
          <table id="table" style={{ width: "100%" }}>
            <tr>
              <th>Name</th>
              <th>Movie Name</th>
              <th>Checked or not</th>
            </tr>
            <tr>
              <td id="n">{name}</td>
              <td id="m">{moviename}</td>
              <td id="t">{termconditions}</td>
            </tr>
          </table>

          {fulldata.map((data) => console.log(data))}
        </Col>
      </Row>
    </Container>
  );
}
