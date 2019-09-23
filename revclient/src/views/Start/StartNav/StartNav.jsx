import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StartNav = () => {
    
    const [name, setName] = useState("User");
    const [clicked, setClicked] = useState(false);

    // let clicked = false;
    const toggleDropdown = () => {
        setClicked(!clicked);
    }

    useEffect(() => {

    }, [])
    
    return (
        <div className="navContainer">
            <div className="links">
                <Link to="/createproject" className="link">Create a project</Link>
                <Link to="" className="link">Community</Link>
                <Link to="" className="link">Help</Link>
            </div>
            <div className="user">
                <div className="welcome" onClick={toggleDropdown}>{`Welcome, ${name}`}</div>
                {clicked && (
                    <div className="dropdown">
                        <div className="on"></div>
                    </div>
                )}

                <div className="userIcon"></div>
            </div>
        </div>
    );
};

export default StartNav;