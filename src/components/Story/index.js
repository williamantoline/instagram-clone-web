import React from "react";
import propTypes from "prop-types";

export default function Story(props) {
  return (
    <div className="story">
        <div>
            <img src={props.src}></img>
        </div>
    </div>
  )
}

Story.propTypes = {
    id: propTypes.string,
    className: propTypes.string,
    src: propTypes.string,
}