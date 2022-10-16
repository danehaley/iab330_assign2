import React from "react";
import {
  BsPeopleFill,
  BsXCircleFill,
  BsDashCircle,
  BsCheckCircle,
  BsTelephoneOutbound,
  BsCone,
} from "react-icons/bs";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Components
import Search from "../components/search";
import Filter from "../components/filter";

export default class Maintenance extends React.Component {
  render() {
    return (
      <>
        <Container className="maintenance px-2">
          <Nav className="maintenance-nav nav px-4 pt-5 pb-3">
            <Nav.Item>
              <h3 className="fw-bold">Rooms</h3>
            </Nav.Item>
            <Nav.Link as="button" className="icon-button py-0 px-2 ms-auto">
              <Search />
            </Nav.Link>
            <Nav.Link as="button" className="icon-button py-0 ps-2 pe-0">
              <Filter />
            </Nav.Link>
          </Nav>
          <CreateCardList />
        </Container>
      </>
    );
  }
}

function CreateCard(props) {
  return (
    <>
      <Col xs={12} md={6} lg={4} className="py-2">
        <Card className="w-100 rounded-4">
          <Card.Body>
            <Card.Title className="fs-4 fw-bold">
              {props.name.toUpperCase()}
            </Card.Title>
            <Card.Text className="fs-5 d-flex mb-4">
              {Availability(props.state)}
            </Card.Text>
            <Card.Text className="d-flex">
              <div className="me-4">
                {props.currentPop}
                <BsPeopleFill size={28} className="ms-2 me-1" />{" "}
                <strong className="fw-bold">Currently</strong>
              </div>
              <div className="me-4">
                {props.sinceCleanPop}
                <BsPeopleFill size={28} className="ms-2 me-1" />{" "}
                <strong className="fw-bold">Since Clean</strong>
              </div>
            </Card.Text>
            <Card.Text></Card.Text>
            <Card.Text className="text-black-50">
              <span className="fw-bold">Last Cleaned</span>:{" "}
              {props.lastCleanDate}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );

  function Availability(state) {
    switch (state) {
      case "Available": {
        return (
          <>
            <BsCheckCircle color={"Green"} size={21} className="mx-0 my-auto" />
            <p className="ms-2 my-auto lh-1 fs-5">Available</p>
          </>
        );
      }
      case "Cleaning": {
        return (
          <>
            <BsCone color={"Orange"} size={21} className="mx-0 my-auto" />
            <p className="ms-1 my-auto lh-1 fs-5">Cleaning</p>
          </>
        );
      }
      case "Clean Requested": {
        return (
          <>
            <BsTelephoneOutbound
              color={"Orange"}
              size={21}
              className="mx-0 my-auto"
            />
            <p className="ms-2 my-auto lh-1 fs-5">Clean Requested</p>
          </>
        );
      }
      case "In Use": {
        return (
          <>
            <BsDashCircle
              color={"#DC3545"}
              size={21}
              className="mx-0 my-auto"
            />
            <p className="ms-2 my-auto lh-1 fs-5">In Use</p>
          </>
        );
      }
      default: {
        return (
          <>
            <BsXCircleFill
              color={"#DC3545"}
              size={21}
              className="mx-0 my-auto"
            />
            <p className="ms-2 my-auto lh-1 fs-5">Error</p>
          </>
        );
      }
    }
  }
}

function CreateCardList() {
  return (
    <Container className="px-4 mb-5" style={{ maxWidth: "1320px" }}>
      <Row className="gx-3">
        <CreateCard
          name={"Examination 1X"}
          state={"Available"}
          currentPop={0}
          sinceCleanPop={4}
          lastCleanDate={"23:59 12/10/2022"}
        />
        <CreateCard
          name={"Examination 2Z"}
          state={"Cleaning"}
          currentPop={1}
          sinceCleanPop={2322}
          lastCleanDate={"23:59 12/01/2022"}
        />

        <CreateCard
          name={"Examination 9E"}
          state={"Clean Requested"}
          currentPop={2}
          sinceCleanPop={4}
          lastCleanDate={"23:59 14/10/2022"}
        />

        <CreateCard
          name={"Examination 4Y"}
          state={"In Use"}
          currentPop={9}
          sinceCleanPop={23}
          lastCleanDate={"23:59 12/09/2022"}
        />
        <CreateCard
          name={"Examination 1X"}
          state={"Available"}
          currentPop={0}
          sinceCleanPop={4}
          lastCleanDate={"23:59 12/10/2022"}
        />
        <CreateCard
          name={"Examination 2Z"}
          state={"Available"}
          currentPop={1}
          sinceCleanPop={2322}
          lastCleanDate={"23:59 12/01/2022"}
        />

        <CreateCard
          name={"Examination 9E"}
          state={"Available"}
          currentPop={2}
          sinceCleanPop={4}
          lastCleanDate={"23:59 14/10/2022"}
        />

        <CreateCard
          name={"Examination 4Y"}
          state={"IDMEWKFMERMVIRKVDSOAKSOXKOSDVKORKVO"}
          currentPop={9}
          sinceCleanPop={23}
          lastCleanDate={"23:59 12/09/2022"}
        />
      </Row>
    </Container>
  );
}
