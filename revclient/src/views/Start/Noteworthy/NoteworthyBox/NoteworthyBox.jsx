import React from 'react';
import { Link } from 'react-router-dom';

const NoteworthyBox = props => {
    return (
        <div className="noteworthyBox">
            <h6>{`${props.box.city}, ${props.box.state}`}</h6>
            <p>{props.box.description}</p>
            <Link to={props.box.link}>Read More</Link>
        </div>
    );
};

export default NoteworthyBox;