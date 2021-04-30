import React, { useState } from "react";

function Taskcomp(props) {
  const [isClicked, setIsClicked] = useState(false);

  function clicked() {
    setIsClicked((prevValue) => !prevValue);
  }

  return (
    <li
      onClick={clicked}
      style={{ textDecoration: isClicked ? "line-through" : "none" }}
    >
      {props.text}
    </li>
  );
}

export default Taskcomp;
