import {
  BsXCircleFill,
  BsDashCircle,
  BsCheckCircle,
  BsTelephoneOutbound,
  BsCone,
} from "react-icons/bs";

export default function Availability(
  state,
  fontSize = "fs-5",
  page = "default"
) {
  if (page === "Bookings" && state === "dirty") {
    state = "clean";
  }
  switch (state) {
    case "clean": {
      state = "Available";
      if (page === "Maintenance") {
        state = "Clean";
      }
      return (
        <>
          <BsCheckCircle color={"Green"} size={21} className="mx-0 my-auto" />
          <p className={"ms-2 my-auto lh-1 " + fontSize}>{state}</p>
        </>
      );
    }
    case "dirty": {
      return (
        <>
          <BsCone color={"Orange"} size={21} className="mx-0 my-auto" />
          <p className={"ms-2 my-auto lh-1 " + fontSize}>Dirty</p>
        </>
      );
    }
    case "clean requested": {
      return (
        <>
          <BsTelephoneOutbound
            color={"Orange"}
            size={21}
            className="mx-0 my-auto"
          />
          <p className={"ms-2 my-auto lh-1 " + fontSize}>Clean Requested</p>
        </>
      );
    }
    case "in use": {
      return (
        <>
          <BsDashCircle color={"#DC3545"} size={21} className="mx-0 my-auto" />
          <p className={"ms-2 my-auto lh-1 " + fontSize}>In Use</p>
        </>
      );
    }
    case "cleaning": {
      return (
        <>
          <BsDashCircle color={"#DC3545"} size={21} className="mx-0 my-auto" />
          <p className={"ms-2 my-auto lh-1 " + fontSize}>Cleaning</p>
        </>
      );
    }
    default: {
      return (
        <>
          <BsXCircleFill color={"#DC3545"} size={21} className="mx-0 my-auto" />
          <p className={"ms-2 my-auto lh-1 " + fontSize}>Error</p>
        </>
      );
    }
  }
}
