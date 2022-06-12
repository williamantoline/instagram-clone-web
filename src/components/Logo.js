import React from "react";
import logo from "../img/logo.png";

function Logo(props) {
  const style = {
    width: "100px",
  };

  return (
    <div>
      <img src={logo} style={style}></img>
    </div>
  );
}

export default Logo;
