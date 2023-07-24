import React from 'react';

function Button(props) {
    return (
        <button
            type={props.type}
            placeholder={props.placeholder}>{props.name}</button>
    );
}

export default Button;