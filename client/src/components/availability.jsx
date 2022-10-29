import {
  BsXCircleFill,
  BsDashCircle,
  BsCheckCircle,
  BsTelephoneOutbound,
  BsCone,
} from "react-icons/bs";

export default function Availability(state, fontSize = "fs-5") {
  switch (state) {
    case "clean": {
      return (
        <>
          <BsCheckCircle color={"Green"} size={21} className="mx-0 my-auto" />
          <p className={"ms-2 my-auto lh-1 " + fontSize}>Available</p>
        </>
      );
    }
    case "Cleaning": {
      return (
        <>
          <BsCone color={"Orange"} size={21} className="mx-0 my-auto" />
          <p className={"ms-2 my-auto lh-1 " + fontSize}>Cleaning</p>
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
          <p className={"ms-2 my-auto lh-1 " + fontSize}>Clean Requested</p>
        </>
      );
    }
    case "In Use": {
      return (
        <>
          <BsDashCircle color={"#DC3545"} size={21} className="mx-0 my-auto" />
          <p className={"ms-2 my-auto lh-1 " + fontSize}>In Use</p>
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
