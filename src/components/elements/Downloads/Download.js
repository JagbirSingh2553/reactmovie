import React from 'react';
import './Downloads.css';

const Downloads = (props) => {
    return (
        <div className="rmdb-Downloads" onClick={props.onClick}>
            <p>{props.text}</p>
        </div>
    )
}

export default Downloads;