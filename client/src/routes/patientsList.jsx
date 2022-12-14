import Header from "../components/header.jsx";
import patientList from "../components/patientList";
import Refresh from "../components/refresh.jsx";
import React, { useState, useEffect } from "react";
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

// Get ID, room number, gender, bed ID, roomID
function getPatient(id) {}

export default function PatientsList(props) {
  const [patients, setPatients] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [updateToggle, setUpdateToggle] = useState(false);

  async function getData() {
    const result = await fetch(`${props.baseURL}:3000/patients`);
    const data = await result.json();
    return data;
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
              <Card.Title className="fs-4 fw-bold">{props.name}</Card.Title>
              <Card.Text className="d-flex">
                <div className="d-flex">
                  <div className="me-4">
                    <strong className="fw-bold">Patient ID:</strong>{" "}
                    {props.patientID}
                  </div>
                </div>
              </Card.Text>
              <Card.Text className="d-flex">
                <div className="d-flex">
                  <div className="me-4">
                    <strong className="fw-bold">Age:</strong> {props.age}
                  </div>
                  <div className="me-4">
                    <strong className="fw-bold">Gender:</strong> {props.gender}
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Modal
          {...props}
          name={props.name}
          info={{
            status: props.status,
            patientID: props.patientID,
            age: props.age,
            gender: props.gender,
            roomID: props.roomid,
          }}
          show={show}
          handleClose={handleClose}
        />
      </>
    );
  }

  function CreateCardList(props) {
    return (
      <Container className="px-4 mb-5" style={{ maxWidth: "1320px" }}>
        <Row className="gx-3">
          {searchResults !== undefined
            ? searchResults.map((patient) => (
                <CreateCard
                  {...props}
                  name={patient.firstname + " " + patient.lastname}
                  status={"In Progress"}
                  patientID={patient.patientid}
                  age={patient.age}
                  gender={patient.gender}
                />
              ))
            : patients.map((patient) => (
                <CreateCard
                  {...props}
                  name={patient.firstname + " " + patient.lastname}
                  status={"In Progress"}
                  patientID={patient.patientid}
                  age={patient.age}
                  gender={patient.gender}
                />
              ))}
        </Row>
      </Container>
    );
  }
  useEffect(() => {
    getData()
      .then((data) => {
        setPatients(data);
        return data;
      })
      .then((data) => {
        setSearchResults(data);
      });
  }, [updateToggle]);

  const searchFilter = (patient, event) => {
    return (
      patient.firstname.toLowerCase().includes(event.target.value) ||
      patient.lastname.toLowerCase().includes(event.target.value) ||
      patient.patientid === parseInt(event.target.value)
    );
  };

  return (
    <>
      <Container className="maintenance px-2">
        <Nav className="maintenance-nav nav px-4 pt-5 pb-3">
          <Nav.Item>
            <h3 className="fw-bold">Patients</h3>
          </Nav.Item>
          <Nav.Link as="button" className="icon-button py-0 px-2 ms-auto">
            <Search
              data={patients}
              filter={searchFilter}
              setSearchResults={setSearchResults}
            />
          </Nav.Link>
          <Nav.Link as="button" className="icon-button py-0 ps-2 pe-0">
            {/*<Filter />*/}
          </Nav.Link>
          <Refresh
            updateToggle={updateToggle}
            setUpdateToggle={setUpdateToggle}
          />
        </Nav>
        {patients != null && <CreateCardList {...props} />}
      </Container>
    </>
  );
}
