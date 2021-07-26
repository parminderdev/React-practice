import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div>
      <ul className="NavSidebar">
        <li>
          <Link to="/Day6">Day6</Link>
        </li>
        <li>
          <Link to="/Day7">Day7</Link>
        </li>
        <li>
          <Link to="/Day7a">Day7 Afternon</Link>
        </li>
        <li>
          <Link to="/Day8">Day8</Link>
        </li>
        <li>
          <Link to="/Day9">Day9</Link>
        </li>
      </ul>
    </div>
  );
}
