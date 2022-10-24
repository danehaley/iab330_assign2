import {
    BsFillCheckCircleFill,
    BsFillClockFill,
    BsFillDashCircleFill,
    BsXCircleFill
  } from "react-icons/bs";
  
  export default function Status(state) {
    switch (state) {
      case "In Progress": {
        return (
          <>
            <BsFillDashCircleFill color={"Orange"} size={21} className="mx-0 my-auto" />
            <p className="ms-2 my-auto lh-1 fs-5">In Progress</p>
          </>
        );
      }
      case "Waiting": {
        return (
          <>
            <BsFillClockFill color={"Red"} size={21} className="mx-0 my-auto" />
            <p className="ms-1 my-auto lh-1 fs-5">Waiting</p>
          </>
        );
      }
      case "Complete": {
        return (
          <>
            <BsFillCheckCircleFill
              color={"green"}
              size={21}
              className="mx-0 my-auto"
            />
            <p className="ms-2 my-auto lh-1 fs-5">Complete</p>
          </>
        );
      }
      default: {
        return (
          <>
            <BsXCircleFill color={"#DC3545"} size={21} className="mx-0 my-auto" />
            <p className="ms-2 my-auto lh-1 fs-5">Error</p>
          </>
        );
      }
    }
  }
  