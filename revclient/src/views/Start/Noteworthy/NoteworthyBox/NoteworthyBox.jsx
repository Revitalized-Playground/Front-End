import React from 'react';
import { Link } from 'react-router-dom';

const NoteworthyBox = props => {
    return (
        <div className={props.box.id == 1 ? "noteworthyBox one" : "noteworthyBox two"}>
            <img src={props.box.image} alt="box background" />
            <div className="flexbox">
                <h6>{`${props.box.city}, ${props.box.state}`}</h6>
                <p>{props.box.description}</p>
                <Link to={props.box.link}>Read More ></Link>
            </div>
        </div>
    );
};

export default NoteworthyBox;