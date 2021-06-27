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
export default function Day1() {
  return (
    <Container className="jumbotron text-center bg-dark text-white">
      <Row>
        <h3>React Bootstrap Package Practice Day 1</h3>
      </Row>
      <Row className="bg-light">
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
      <Row className="m-5">
        <Col className="text-left">
          <Form>
            <Form.Group>
              <Form.Label>Enter your full name:</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" />
            </Form.Group>
            <Form.Group>
              <Form.Label className="text-left">
                Enter your email address:
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your your email address"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Enter your age:</Form.Label>
              <Form.Control type="number" placeholder="Enter your age" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Click here to submit form
            </Button>
          </Form>
        </Col>
        <Col>
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/id/237/400/270"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/id/238/400/270"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/id/239/400/270"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
