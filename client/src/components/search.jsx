import { BsSearch, BsXLg } from "react-icons/bs";
import Fade from "react-bootstrap/esm/Fade";
import { useState } from "react";

export default function Search(props) {
  const [open, setOpen] = useState(false);
  const handleSubmit = (e) => e.preventDefault();
  const handleSearchChange = (e) => {
    if (!e.target.value) return props.setSearchResults(props.rooms);
    const resArr = props.data.filter((datae) => props.filter(datae, e));
    props.setSearchResults(resArr);
  };

  return (
    <div className="d-flex">
      <Fade in={open} dimension="width">
        <form onSubmit={handleSubmit}>
          <input
            className="form-control me-2 "
            type="text"
            onChange={handleSearchChange}
            placeholder="Search..."
          />
        </form>
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
