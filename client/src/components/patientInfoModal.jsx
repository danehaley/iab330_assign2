import Button from "react-bootstrap/Button";
import BootstrapModal from "react-bootstrap/Modal";

export default function Modal(props) {
  return (
    <BootstrapModal show={props.show} onHide={props.handleClose}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title className="fw-bold fs-3">
          Patient Information
        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <div className="me-4">
          <strong className="fw-bold">Patient Name:</strong>
          {" "}
          {props.name}
        </div>
        <div className="d-flex">
          <div className="me-4">
            <strong className="fw-bold">Age:</strong>
            {" "}
            {props.info.age}
          </div>
          <div className="me-4">
            <strong className="fw-bold">Gender:</strong>
            {" "}
            {props.info.gender}
          </div>
        </div>
        <div className="me-4">
            <strong className="fw-bold">Occupation:</strong>
            {" "}
            {props.info.occupation}
        </div>
        <div className="me-4">
            <strong className="fw-bold">Blood Type:</strong>
            {" "}
            {props.info.bloodType}
        </div>
        <div className="d-flex">
          <div className="me-4">
            <strong className="fw-bold">Patient ID:</strong>
            {" "}
            {props.info.patientID}
          </div>
          <div className="me-4">
            <strong className="fw-bold">Bed ID:</strong>
            {" "}
            {props.info.bedID}
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
