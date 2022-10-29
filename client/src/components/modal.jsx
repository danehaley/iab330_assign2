import Button from "react-bootstrap/Button";
import BootstrapModal from "react-bootstrap/Modal";
import { BsPeopleFill } from "react-icons/bs";

// Component import
import Availability from "./availability";

export default function Modal(props) {
  function pluralizer(number, object, stop = false) {
    return `${number} ${object}${number > 1 && "s"}${stop ? "" : ","}`;
  }
  function requestClean() {}
  return (
    <>
      <BootstrapModal show={props.show} onHide={props.handleClose}>
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title className="fw-bold fs-3">
            {`${props.roomtype.toUpperCase()} ROOM ${props.roomid}`}
          </BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>
          <div className="fs-5 d-flex mb-3">
            {Availability(props.status, "fs-3")}
          </div>
          <div className="d-flex flex-row fs-5">
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
          </div>
          <div className="d-flex flex-row gap-2 fs-6">
            <strong>{`${pluralizer(props.nurse, "Nurse")}`}</strong>
            <strong>{`${pluralizer(props.doctor, "Doctor")}`}</strong>
            <strong>{`${pluralizer(props.patient, "Patient", true)}`}</strong>
          </div>
          <div className="d-flex flex-column gap-2 fs-6 mt-3">
            <p className="text-secondary">Last Cleaned: hi</p>
          </div>
        </BootstrapModal.Body>
        <BootstrapModal.Footer>
          <Button variant="primary" className="w-100" onClick={requestClean}>
            Request Clean
          </Button>
        </BootstrapModal.Footer>
      </BootstrapModal>
    </>
  );
}
