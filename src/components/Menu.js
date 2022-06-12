import React from "react";

function Menu(props) {
  const { id, name, src, srcType } = props;
  return (
    <div>
      <img id={id} name={name} src={src} />
    </div>
  );
}

export default Menu;
