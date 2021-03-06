import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Sidebar from "./Sidebar";
export default function Home() {
  return (
    <Container>
      <Row>
        <Col xs={3}>
          <Sidebar></Sidebar>
        </Col>
        <Col xs={9}>
          <h3>Home Page</h3>
        </Col>
      </Row>
    </Container>
  );
}
