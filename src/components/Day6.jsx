import Sidebar from "./Sidebar";
import { Container, Row, Col } from "react-bootstrap";
export default function Day6() {
  return (
    <Container>
      <Row>
        <Col xs={3}>
          <Sidebar></Sidebar>
        </Col>
        <Col xs={9}>
          <div>
            <h1>Day6 Practice page</h1>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
