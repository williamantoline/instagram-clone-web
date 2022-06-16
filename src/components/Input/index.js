import React from "react";
import propTypes from "prop-types";

export default function Input(props) {
    if (props.icon === null) {
        return (
        <div>
            <input
            type={props.type}
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            ></input>
        </div>
        );
    } else {
        return (
        <div>
            <img src={props.icon}></img>
            <input
            type={props.type}
            id={props.id}
            name={props.name}
            placeholder={props.placeholder}
            value={props.value}
            ></input>
        </div>
        );
    }
}

Input.propTypes = {
    className: propTypes.string,
    id: propTypes.string,
    name: propTypes.string,
    type: propTypes.oneOf(["text"]),
    hasIcon: propTypes.bool,
    placeholder: propTypes.string,
    value: propTypes.string,
    icon: propTypes.string,

}