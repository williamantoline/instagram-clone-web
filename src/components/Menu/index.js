import React from "react";
import propTypes from "prop-types";

import "./index.scss";

export default function Menu(props) {
  return (
    <div>
      <img id={props.id} name={props.name} src={props.src} />
    </div>
  )
}

Menu.propTypes = {
    id: propTypes.string,
    name: propTypes.string,
    src: propTypes.string,
}