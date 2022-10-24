import Header from "../components/header.jsx";
import patientList from "../components/patientList";
import React, { useState } from "react";
import { BsPeopleFill } from "react-icons/bs";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Components
import Search from "../components/search";
//import Filter from "../components/filter";
import Modal from "../components/patientInfoModal";
import Status from "../components/patientStatus";

export default class PatientsList extends React.Component {
  render() {
    return (
      <>
        <Container className="maintenance px-2">
          <Nav className="maintenance-nav nav px-4 pt-5 pb-3">
            <Nav.Item>
              <h3 className="fw-bold">Patients</h3>
            </Nav.Item>
            <Nav.Link as="button" className="icon-button py-0 px-2 ms-auto">
              <Search />
            </Nav.Link>
            <Nav.Link as="button" className="icon-button py-0 ps-2 pe-0">
              {/*<Filter />*/}
            </Nav.Link>
          </Nav>
          <CreateCardList />
        </Container>
      </>
    );
  }
}

function CreateCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <Col xs={12} md={6} lg={4} className="py-2" onClick={handleShow}>
        <Card className="w-100 rounded-4">
          <Card.Body>
            <Card.Text className="d-flex">
              <div className="me-4">
                <Card.Title className="fs-4 fw-bold">
                  {props.name}
                </Card.Title>
              </div>
              <div>
                <Card.Text className="fs-5 d-flex mb-4">
                  {props.floorRoom}
                </Card.Text>
              </div>
            </Card.Text>
            <Card.Text>
              <strong className="fw-bold">Patient ID:</strong>
              {" "}
              {props.patientID}
            </Card.Text>
            <Card.Text className="d-flex">
              <div className="me-4">
                <Card.Text>
                  <strong className="fw-bold">Consultation Status:</strong>
                  {" "}
                  {props.status}
                </Card.Text>
              </div>
              <div>
                <Card.Text className="fs-5 d-flex mb-4">
                  {Status(props.status)}
                </Card.Text>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Modal
        name={props.name}
        info={{
          status: props.status,
          patientID: props.patientID,
          floorRoom: props.floorRoom,
        }}
        show={show}
        handleClose={handleClose}
      />
    </>
  );
}

function CreateCardList() {
  return (
    <Container className="px-4 mb-5" style={{ maxWidth: "1320px" }}>
      <Row className="gx-3">
        <CreateCard
          name={"Daryls Smith"}
          status={"In Progress"}
          patientID={0}
          floorRoom={"Level 3 Room 3A"}
        />
      </Row>
    </Container>
  );
}
