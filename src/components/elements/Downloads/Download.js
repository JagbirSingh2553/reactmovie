import React from 'react';
import './Downloads.css';

const Downloads = (props) => {
    return (
        <div className="rmdb-Downloads" onClick={props.onClick} >
            <p><a href="https://1337xto.to/">{props.text}</a></p>
        </div>
    )
}

export default Downloads;