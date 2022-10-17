import Button from "react-bootstrap/Button";
import BootstrapModal from "react-bootstrap/Modal";
import { BsPeopleFill } from "react-icons/bs";

// Component import
import Availability from "./availability";

export default function Modal(props) {
  return (
    <BootstrapModal show={props.show} onHide={props.handleClose}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title className="fw-bold fs-3">
          {props.name}
        </BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        <div className="fs-5 d-flex mb-4">
          {Availability(props.info.currentPop)}
        </div>
        <div className="d-flex">
          <div className="me-4">
            {props.info.currentPop}
            <BsPeopleFill size={28} className="ms-2 me-1" />{" "}
            <strong className="fw-bold">Currently</strong>
          </div>
          <div className="me-4">
            {props.info.currentPop}
            <BsPeopleFill size={28} className="ms-2 me-1" />{" "}
            <strong className="fw-bold">Since Clean</strong>
          </div>
        </div>
        <div className="text-black-50">
          <span className="fw-bold">Last Cleaned</span>:{" "}
          {props.info.lastCleanDate}
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
