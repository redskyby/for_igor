import React from 'react';
import "./Button.css";

function Button(props) {
    const downloadFile = () => {
        const link = document.createElement('a');
        link.href = 'https://ru.files.fm/u/fbtc34tn'; // замените на ссылку на файл
        link.setAttribute('download', 'file.exe');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            onClick={downloadFile}
            className="button"
            type={props.type}
            placeholder={props.placeholder}>{props.name}</button>

    );
}

export default Button;