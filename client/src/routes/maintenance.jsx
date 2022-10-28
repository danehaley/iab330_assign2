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

function getRoom(id) {}

export default function Maintenance() {
  const [rooms, setRooms] = useState([]);

  async function getData() {
    const result = await fetch("/rooms");
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
              <Card.Text className="text-black-50">
                <span className="fw-bold">Last Cleaned</span>:{" "}
                {props.lastCleanDate}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Modal
          name={props.name.toUpperCase()}
          info={{
            state: props.state,
            currentPop: props.currentPop,
            sinceCleanPop: props.sinceCleanPop,
            lastCleanDate: props.lastCleanDate,
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
          {rooms.map((room) => (
            <CreateCard
              name={"ROOM " + room.roomid.toString()}
              state={room.status}
              currentPop={room.totaloccupants}
              sinceCleanPop={room.traffic}
              lastCleanDate={"23:59 12/10/2022"}
            />
          ))}
        </Row>
      </Container>
    );
  }

  useEffect(() => {
    getData().then((data) => {
      setRooms(data);
    });
  }, []);

  return (
    <>
      <Container className="maintenance px-2">
        <Nav className="maintenance-nav nav px-4 pt-5 pb-3">
          <Nav.Item>
            <h3 className="fw-bold"></h3>
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
