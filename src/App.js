import Day1 from "./components/Day1";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Button,
  Col,
  Form,
  Carousel,
  Nav,
} from "react-bootstrap";
function App() {
  return (
    // Use Day 1 Component <Day1></Day1>
    <div>
      <Container className="jumbotron text-center bg-dark text-white">
        <Row>
          <h2>React Practice Step By Step By Parminder</h2>
        </Row>
      </Container>
    </div>
  );
}

export default App;
