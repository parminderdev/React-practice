import { BrowserRouter as Router, Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <ul className="Nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/day1">Day1 Practice</Link>
        </li>
        <li>
          <Link to="/day2">Day2 Practice</Link>
        </li>
        <li>
          <Link to="/day3">Day3 Practice</Link>
        </li>
        <li>
          <Link to="/day4">Day4 Practice</Link>
        </li>
        <li>
          <Link to="/day5">Day5 Practice</Link>
        </li>
      </ul>
    </div>
  );
}
