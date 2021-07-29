import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Day1 from "./components/Day1";
import Day2 from "./components/Day2";
import Day3 from "./components/Day3";
import Day4 from "./components/Day4";
import Day5 from "./components/Day5";
import Day6 from "./components/Day6";
import Day7 from "./components/Day7";
import Day7a from "./components/Day7a";
import Day8 from "./components/Day8";
import Day9 from "./components/Day9";
//import Day7 from "./components/Day7";
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
                <h3>Day 2 Practice with props and states in Class Component</h3>
                <Day2 name="Parminder" email="parmmehra@gmail.com"></Day2>
                <Day2 name="Sandeep" email="sandeep@gmail.com"></Day2>
              </Route>
              <Route exact path="/day3" component={Day3} />
              <Route exact path="/day4" component={Day4} />
              <Route exact path="/day5" component={Day5} />
              <Route exact path="/day6" component={Day6} />
              <Route exact path="/day7" component={Day7} />

              <Route exact path="/day7a" component={Day7a} />
              <Route exact path="/day8" component={Day8} />
              <Route exact path="/day9" component={Day9} />
            </Switch>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
