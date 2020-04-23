import React from 'react';
import { Link } from 'react-router-dom';
import './Video.css';

const Video = (props) => {
    return (
        <div>
            <Link to={{ pathname:`/${props.trailerId}`}} >
            <button className="button2" alt="button"> Trailer</button>
            </Link>
        </div>
    )
}

export default Video;

// {props.clickable ?
//     <Link to = {{ pathname:`/${props.tvshowId}`,tvshowName:`/${props.tvshowName}` }}>
//     <img src={props.image} alt="moviethumb" />
//     </Link>
//     :
//     <img src={props.image} alt="moviethumb" />
//     }