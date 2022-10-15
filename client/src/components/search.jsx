import { BsSearch, BsXLg } from "react-icons/bs";
import Collapse from "react-bootstrap/esm/Collapse";
import { useState } from "react";

export default function Search() {
  const [open, setOpen] = useState(false);

  return (
    <div className="d-flex">
      <Collapse in={open}>
        <input
          className="form-control me-2"
          type="searc collapse"
          onChange={null}
          placeholder="Search..."
        />
      </Collapse>
      <SearchToggle state={open} setState={setOpen} />
    </div>
  );
}

function SearchToggle(props) {
  const switchingIcon = (state) => {
    if (state) {
      return <BsXLg />;
    } else if (!state) {
      return <BsSearch />;
    }
  };

  return (
    <button
      as="button"
      type="button"
      onClick={() => props.setState(!props.state)}
      className="icon-button py-0 px-2"
    >
      {switchingIcon(props.state)}
    </button>
  );
}
