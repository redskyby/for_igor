import React from 'react';
import "./Button.css";

function Button(props) {
    return (
        <button
            className="button"
            type={props.type}
            placeholder={props.placeholder}>{props.name}</button>
    );
}

export default Button;