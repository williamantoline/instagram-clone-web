import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import logo from "img/logo.png";

import "./index.scss";

export default function Logo(props) {
    return (
        <div className="logo">
            <a href="/">
                <img src={logo}></img>
            </a>
        </div>
    )
}