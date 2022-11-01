import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import BootstrapModal from "react-bootstrap/Modal";
import { BsPeopleFill } from "react-icons/bs";
import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  ResponsiveContainer,
  Label,
} from "recharts";
import capitalize from "../helpers/capitalize";
import pluralizer from "../helpers/pluralizer";

// Component import
import Availability from "./availability";

export default function Modal(props) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({ history: 1 });

  function handleShow() {
    setOpen(!open);
  }

  async function postData(url) {
    await fetch(url, {
      method: "PATCH",
    });
  }

  function requestClean() {
    postData(
      `${props.baseURL}:3000/room/${props.roomid}/${encodeURI(
        "clean requested"
      )}`
    ).then(() => {
      props.setUpdateToggle(!props.updateToggle);
    });
  }

  function cancelCleanRequest() {
    postData(
      `${props.baseURL}:3000/room/${props.roomid}/${encodeURI("clean cancel")}`
    ).then(() => {
      props.setUpdateToggle(!props.updateToggle);
    });
  }

  function submitClean() {
    postData(
      `${props.baseURL}:3000/room/${props.roomid}/${encodeURI("clean")}`
    ).then(() => {
      props.setUpdateToggle(!props.updateToggle);
    });
  }

  function setCleaning() {
    postData(
      `${props.baseURL}:3000/room/${props.roomid}/${encodeURI("cleaning")}`
    ).then(() => {
      props.setUpdateToggle(!props.updateToggle);
    });
  }

  useEffect(() => {
    if (open) {
      fetch(`${props.baseURL}:3000/room-history/${props.roomid}`)
        .then((result) => {
          result = result.json();
          return result;
        })
        .then((myData) => {
          setData(myData);
        });
    }
  }, [open, props.roomid]);

  const formatXAxis = (tickFormat) => {
    return String(tickFormat).substring(11, 16);
  };

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
            {`${capitalize(props.roomtype)} Room ${props.roomid}`}
          </BootstrapModal.Title>
        </BootstrapModal.Header>
        <BootstrapModal.Body>
          <div className="fs-5 d-flex mb-3">
            {Availability(props.status, "fs-4", "Maintenance")}
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
          {/* <div className="d-flex flex-column gap-2 fs-6 mt-3">
            <p className="text-secondary">Last Cleaned: hi</p>
          </div> */}
          {data && (
            <>
              <BootstrapModal.Title className="fw-bold fs-3 mb-3">
                History
              </BootstrapModal.Title>
              <div style={{ width: "95%", height: "50vh", maxHeight: "400px" }}>
                <ResponsiveContainer height="100%" width={"100%"}>
                  <LineChart data={data.history}>
                    <YAxis
                      interval={1}
                      padding={{ top: 10 }}
                      tickCount={5}
                      allowDecimals={false}
                      dx={2}
                      width={60}
                    >
                      <Label
                        value="People Since Clean"
                        dx={-5}
                        angle={-90}
                        offset={0}
                      />
                    </YAxis>
                    <XAxis
                      dataKey="time"
                      tickFormatter={(tick) => formatXAxis(tick)}
                      interval={30}
                      height={40}
                      padding={{ right: 30 }}
                      width={40}
                    >
                      <Label
                        value="Time"
                        dy={2}
                        offset={0}
                        position="insideBottom"
                      />
                    </XAxis>
                    <Line
                      dataKey="numberOfPeople.sinceClean"
                      barSize={20}
                      fill="#8884d8"
                      dot={false}
                      isAnimationActive={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </>
          )}
        </BootstrapModal.Body>
        <BootstrapModal.Footer>
          <Button
            variant={
              props.status === "clean requested" ? "secondary" : "primary"
            }
            className="w-100"
            onClick={
              props.status === "clean requested"
                ? cancelCleanRequest
                : requestClean
            }
          >
            {props.status === "clean requested"
              ? "Cancel Clean"
              : "Request Clean"}
          </Button>
          <Button
            variant={"primary"}
            className="w-100"
            onClick={props.status === "cleaning" ? submitClean : setCleaning}
          >
            {props.status === "cleaning" ? "Finish Clean" : "Set Cleaning"}
          </Button>
        </BootstrapModal.Footer>
      </BootstrapModal>
    </>
  );
}
