import Button from "react-bootstrap/Button";
import BootstrapModal from "react-bootstrap/Modal";
import { BsPeopleFill } from "react-icons/bs";

// Component import
import Status from "./patientStatus";

export default function Modal(props) {
  return (
    <BootstrapModal show={props.show} onHide={props.handleClose}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title className="fw-bold fs-3">
          {props.name}
        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <div className="me-4">
            {props.info.floorRoom}
        </div>
        <div className="me-4">
            <strong className="fw-bold">Patient ID:</strong>
            {" "}
            {props.info.patientID}
        </div>
        <div className="d-flex">
            <div className="me-4">
                <strong className="fw-bold">Consultation Status:</strong>
                {" "}
                {props.info.status}
            </div>
            <div className="me-4">
                {Status(props.info.status)}
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
