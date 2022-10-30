import Button from "react-bootstrap/Button";
import BootstrapModal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";

export default function Modal(props) {
  const [patientRooms, setPatientRoom] = useState({ roomid: "" });
  async function getData() {
    const result = await fetch(
      `http://localhost:3001/patient-location/${props.info.patientID}`
    );
    const data = await result.json();
    return data;
  }
  useEffect(() => {
    getData().then((data) => setPatientRoom({ roomid: data[0].roomid }));
  }, [props.roomid]);

  return (
    <BootstrapModal show={props.show} onHide={props.handleClose}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title className="fw-bold fs-3">
          Patient Information
        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <div className="me-4">
          <strong className="fw-bold">Patient Name:</strong> {props.name}
        </div>
        <div className="d-flex">
          <div className="me-4">
            <strong className="fw-bold">Age:</strong> {props.info.age}
          </div>
          <div className="me-4">
            <strong className="fw-bold">Gender:</strong> {props.info.gender}
          </div>
        </div>
        <div className="d-flex">
          <div className="me-4">
            <strong className="fw-bold">Patient ID:</strong>{" "}
            {props.info.patientID}
          </div>
          <div className="me-4">
            <strong className="fw-bold">Room ID:</strong> {patientRooms.roomid}
          </div>
        </div>
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
}
