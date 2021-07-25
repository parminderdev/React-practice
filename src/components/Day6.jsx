import Sidebar from "./Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
export default function Day6() {
  const [data, setData] = useState(null);
  function getdata(val) {
    console.log(val.target.value);
    setData(val.target.value);
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
            <br></br>
            <input type="text" onChange={getdata}></input>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
