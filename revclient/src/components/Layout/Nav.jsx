import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/LandingPage/Logo.png';
// import darkModeEmoji from '../../assets/Global/Nav/night-mode-512.png';
// import lightModeEmoji from '../../assets/Global/Nav/night-mode-512.png';
import { FaMoon } from "react-icons/fa";

const links = [{ href: '#', label: 'Browse' }, { href: '#', label: 'Learn More' }, { href: '#', label: 'Team' }, { href: '#', label: 'Log In' }].map(
	link => {
		link.key = `nav-link-${link.href}-${link.label}`;
		return link;
	},
);

const Nav = () => {
	const [darkModeActive, setDarkMode] = useState(false);

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

	return (
		<nav>
			<a href="/" title="Home">
				<div className="logo">
					<img src={logo} alt="Revitalize logo" />
					<h2>Revitalize </h2>
				</div>
			</a>

			<ul>
				{links.map(({ key, href, label }) => (
					<li className="navLinks" key={key}>
						<a href={href}>{label}</a>
					</li>
				))}
				{/* <Link to="/login"><button className="login">Login</button></Link> */}
				<Link to="/register"><button className="register">Get Started</button></Link>
			</ul>
			<div className="dark-mode-emoji">
				<FaMoon

					onClick={() => toggleDarkMode()}
				/>
			</div>
		</nav>
	);
};
export default Nav;
