import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StartNav = () => {
    
    const [name, setName] = useState("User");

    useEffect(() => {

    }, [])
    
    return (
        <div className="navContainer">
            <div className="links">
                <Link to="">Create a project</Link>
                <Link to="">Community</Link>
                <Link to="">Help</Link>
            </div>
            <div className="user">
                <p>{`Welcome, ${name}`}</p>
                <div className="userIcon"></div>
            </div>
        </div>
    );
};

export default StartNav;