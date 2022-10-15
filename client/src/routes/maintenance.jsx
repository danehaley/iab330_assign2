import React from "react";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsFilter, BsSearch } from "react-icons/bs";

export default class Maintenance extends React.Component {
  render() {
    return (
      <div className="maintenance">
        <Nav className="maintenance-nav nav">
          <Nav.Item>Rooms</Nav.Item>
          <Nav.Item
            as="button"
            className="nav__icon-button--search icon-button"
          >
            <BsSearch />
          </Nav.Item>
          <Nav.Item
            as="button"
            className="nav__icon-button--filter icon-button"
          >
            <BsFilter />
          </Nav.Item>
        </Nav>
        <CreateCardList />
      </div>
    );
  }
}

function CreateCard(props) {
  return (
    <>
      <Col xs={12} md={6} lg={4} className="p-2">
        <Card className="w-100 rounded-4">
          <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.availability}</Card.Text>
            <Card.Text>{props.currentPop} Currently</Card.Text>
            <Card.Text>{props.sinceCleanPop} Since Clean</Card.Text>
            <Card.Text>Last Cleaned: {props.lastCleanDate}</Card.Text>
          </Card.Body>
        </Card>
      </Col>

      {/* Custom Bootstrap styles */}
      <style type="text/css">
        {`
        .card{
          transition: all .3s cubic-bezier(0,0,.5,1);
          cursor: pointer;
          box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
        }
        .card:hover {
          box-shadow: 0 .25rem .5rem rgba(0,0,0,.16);
          transform: scale3d(1.01,1.01,1.01);
        }
      `}
      </style>
    </>
  );
}

function CreateCardList() {
  return (
    <Container className="px-4" style={{ maxWidth: "1320px" }}>
      <Row>
        <CreateCard
          name={"ROOM 1X"}
          availability={"Available"}
          currentPop={0}
          sinceCleanPop={4}
          lastCleanDate={"23:59 12/10/2022"}
        />
        <CreateCard
          name={"ROOM 2Z"}
          availability={"Cleaning"}
          currentPop={1}
          sinceCleanPop={2322}
          lastCleanDate={"23:59 12/01/2022"}
        />
        <CreateCard
          name={"ROOM 4Y"}
          availability={"In Use"}
          currentPop={9}
          sinceCleanPop={23}
          lastCleanDate={"23:59 12/09/2022"}
        />
      </Row>
      <Row>
        <CreateCard
          name={"ROOM 9E"}
          availability={"Clean Requested"}
          currentPop={2}
          sinceCleanPop={4}
          lastCleanDate={"23:59 14/10/2022"}
        />
      </Row>
    </Container>
  );
}
