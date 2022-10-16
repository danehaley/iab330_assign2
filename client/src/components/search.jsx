import { BsSearch, BsXLg } from "react-icons/bs";
import Fade from "react-bootstrap/esm/Fade";
import { useState } from "react";

export default function Search() {
  const [open, setOpen] = useState(false);

  return (
    <div className="d-flex">
      <Fade in={open} dimension="width">
        <div>
          <input
            className="form-control me-2 "
            type="search"
            onChange={null}
            placeholder="Search..."
          />
        </div>
      </Fade>
      <SearchToggle state={open} setState={setOpen} />
    </div>
  );
}

function SearchToggle(props) {
  const switchingIcon = (state) => {
    if (state) {
      return <BsXLg size={18} />;
    } else if (!state) {
      return <BsSearch size={18} />;
    }
  };

  return (
    <button
      as="button"
      type="button"
      onClick={() => props.setState(!props.state)}
      className="icon-button py-0 ps-2 pe-0"
    >
      {switchingIcon(props.state)}
    </button>
  );
}
