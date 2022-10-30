import { useState } from "react";
import { useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import BootstrapModal from "react-bootstrap/Modal";
import { BsPeopleFill } from "react-icons/bs";
import { LineChart, XAxis, YAxis, Line, ResponsiveContainer } from "recharts";

// Component import
import Availability from "./availability";

export default function Modal(props) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ history: 1 });

  function handleShow() {
    setOpen(!open);
  }

  function pluralizer(number, object, stop = false) {
    return `${number} ${object}${number > 1 && "s"}${stop ? "" : ","}`;
  }

  function requestClean() {
    fetch(
      `http://localhost:3001/room/${props.roomid}/${encodeURI(
        "clean requested"
      )}`,
      {
        method: "PATCH",
      }
    );
    props.setUpdateToggle(!props.updateToggle);
  }

  useEffect(() => {
    if (open) {
      fetch(`http://localhost:3001/room-history/${props.roomid}`)
        .then((result) => {
          result = result.json();
          return result;
        })
        .then((myData) => {
          setData(myData);
        });
    }
  }, [open, props.roomid]);

  return (
    <>
      <BootstrapModal
        show={props.show}
        onHide={props.handleClose}
        onShow={handleShow}
        className="modal-lg"
      >
        <BootstrapModal.Header closeButton>
          <BootstrapModal.Title className="fw-bold fs-3">
            {`${props.roomtype.toUpperCase()} ROOM ${props.roomid}`}
          </BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>
          <div className="fs-5 d-flex mb-3">
            {Availability(props.status, "fs-4")}
          </div>
          <div className="d-flex flex-row fs-5">
            <div className="me-4">
              {props.totaloccupants}
              <BsPeopleFill size={28} className="ms-2 me-1" />{" "}
              <strong className="fw-bold">Currently</strong>
            </div>
            <div className="me-4">
              {props.traffic}
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
          {data && (
            <div style={{ width: "100%", height: "50vh", maxHeight: "400px" }}>
              <ResponsiveContainer height="100%">
                <LineChart data={data.history}>
                  <Line
                    dataKey="numberOfPeople.current"
                    barSize={20}
                    fill="#8884d8"
                  />
                  <XAxis dataKey="time" />
                  <YAxis width={30} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
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
