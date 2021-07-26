import React from "react";
import Sidebar from "./Sidebar";
import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";
export default class Day7a extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs="3">
            <Sidebar></Sidebar>
          </Col>
          <Col xs="9">
            <p>Form handling with class component (Controlled Component)</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
