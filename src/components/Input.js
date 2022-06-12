import React from "react";

function Input(props) {
  const style = {};

  const { id, name, type, textPlaceholder, imagePlaceholder, value } = props;

  if (imagePlaceholder === null) {
    return (
      <div>
        <input
          type={type}
          id={id}
          name={name}
          placeholder={textPlaceholder}
          value={value}
        ></input>
      </div>
    );
  } else {
    return (
      <div>
        <img src={imagePlaceholder}></img>
        <input
          type={type}
          id={id}
          name={name}
          placeholder={textPlaceholder}
          value={value}
        ></input>
      </div>
    );
  }
}

export default Input;
