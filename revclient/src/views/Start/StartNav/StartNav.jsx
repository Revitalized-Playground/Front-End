import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FaMoon } from "react-icons/fa";

const StartNav = () => {
    
    const [darkModeActive, setDarkMode] = useState(false);
    const [name, setName] = useState("User");
    const [clicked, setClicked] = useState(false);

    // let clicked = false;
    const toggleDropdown = () => {
        setClicked(!clicked);
    }
    const toggleDarkMode = () => {
		setDarkMode(!darkModeActive);
		localStorage.setItem('dark-mode', !darkModeActive)
	};

	useEffect(() => {
		if (JSON.parse(localStorage.getItem('dark-mode')) == true) {
			document.querySelector('body').classList.add('dark-mode')
		} else {
			document.querySelector('body').classList.remove('dark-mode')
		}
	}, [darkModeActive])
    // useEffect(() => {

    // }, [])
    
    return (
        <div className="navContainer">

            <div className="dark-mode-emoji">
				<FaMoon onClick={() => toggleDarkMode()}/>
			</div>
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