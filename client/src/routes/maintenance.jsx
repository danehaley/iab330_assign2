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
import Modal from "../components/modal";
import Availability from "../components/availability";

export default function Maintenance() {
  const [rooms, setRooms] = useState([]);
  const [updateToggle, setUpdateToggle] = useState(false);

  useEffect(() => {
    getDataRooms().then((data) => {
      setRooms(data);
    });
  }, [updateToggle]);

  async function getDataRooms() {
    const result = await fetch("http://localhost:3001/rooms");
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
              <Card.Title className="fs-4 fw-bold">
                {`${props.roomtype.toUpperCase()} ROOM ${props.roomid}`}
              </Card.Title>
              <Card.Text className="fs-4 d-flex mb-4">
                {Availability(props.status)}
              </Card.Text>
              <Card.Text className="d-flex">
                <div className="me-4">
                  {props.traffic}
                  <BsPeopleFill size={28} className="ms-2 me-1" />{" "}
                  <strong className="fw-bold">Currently</strong>
                </div>
                <div className="me-4">
                  {props.totaloccupants}
                  <BsPeopleFill size={28} className="ms-2 me-1" />{" "}
                  <strong className="fw-bold">Since Clean</strong>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Modal
          {...props}
          updateToggle={updateToggle}
          setUpdateToggle={setUpdateToggle}
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
          {rooms.map((room) => (
            <CreateCard {...room} />
          ))}
        </Row>
      </Container>
    );
  }

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
            {/*<Filter />*/}
          </Nav.Link>
        </Nav>
        {rooms != null && <CreateCardList />}
      </Container>
    </>
  );
}
