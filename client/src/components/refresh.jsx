import { BsArrowRepeat } from "react-icons/bs";
import { useState } from "react";

export default function Refresh(props) {
  const [animationState, setAnimationState] = useState(false);

  const handleRefresh = () => {
    console.log("hi");
    setAnimationState(true);
    props.setUpdateToggle(!props.updateToggle);
  };

  return (
    <button
      as="button"
      type="button"
      onClick={() => handleRefresh()}
      className={`icon-button py-0 ps-2 pe-0`}
    >
      <BsArrowRepeat
        size={24}
        className={`${animationState ? "icon-button__refresh" : ""}`}
        onAnimationIteration={() => setAnimationState(false)}
      />
    </button>
  );
}
