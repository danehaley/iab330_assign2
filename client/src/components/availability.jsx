import {
  BsXCircleFill,
  BsDashCircle,
  BsCheckCircle,
  BsTelephoneOutbound,
  BsCone,
} from "react-icons/bs";

export default function Availability(state) {
  switch (state) {
    case "Available": {
      return (
        <>
          <BsCheckCircle color={"Green"} size={21} className="mx-0 my-auto" />
          <p className="ms-2 my-auto lh-1 fs-5">Available</p>
        </>
      );
    }
    case "Cleaning": {
      return (
        <>
          <BsCone color={"Orange"} size={21} className="mx-0 my-auto" />
          <p className="ms-1 my-auto lh-1 fs-5">Cleaning</p>
        </>
      );
    }
    case "Clean Requested": {
      return (
        <>
          <BsTelephoneOutbound
            color={"Orange"}
            size={21}
            className="mx-0 my-auto"
          />
          <p className="ms-2 my-auto lh-1 fs-5">Clean Requested</p>
        </>
      );
    }
    case "In Use": {
      return (
        <>
          <BsDashCircle color={"#DC3545"} size={21} className="mx-0 my-auto" />
          <p className="ms-2 my-auto lh-1 fs-5">In Use</p>
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
