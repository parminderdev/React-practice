import Sidebar from "./Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

// Functional Component for get data from input feild and print on click button
export default function Day6() {
  const [data, setData] = useState(null);
  const [print1, setPrint] = useState(false);

  function getdata(val) {
    console.log(val.target.value);
    setData(val.target.value);
    setPrint(false);
  }

  return (
    <Container>
      <Row>
        <Col xs={3}>
          <Sidebar></Sidebar>
        </Col>
        <Col xs={9}>
          <div>
            <h1>Day6 Practice page</h1>
            <p>Get input from Inbox</p>
            <p>Input Value is : {data}</p>
            {print1 ? data : "Button not clicked yet"}
            <br></br>
            <input type="text" onChange={getdata}></input>
            <input
              type="button"
              value="Print Data"
              onClick={() => setPrint(true)}
            ></input>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
