import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Day1 from "./components/Day1";
import Day2 from "./components/Day2";
import Day3 from "./components/Day3";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
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
    <Router>
      <div>
        <Container className="jumbotron text-center bg-dark text-white">
          <Row>
            <h2>React Practice Step By Step By Parminder</h2>
          </Row>
          <Row>
            <Navigation></Navigation>
          </Row>
          <Row>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/day1">
                <Day1></Day1>
              </Route>
              <Route exact path="/day2">
                <Day2 name="Parminder" email="parmmehra@gmail.com"></Day2>
                <Day2 name="Sandeep" email="sandeep@gmail.com"></Day2>
              </Route>
              <Route exact path="/day3" component={Day3} />
            </Switch>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
