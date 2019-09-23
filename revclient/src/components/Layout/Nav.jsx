import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/LandingPage/Logo.png';
import { FaMoon } from "react-icons/fa";

const links = [
	{ to: '/', label: 'Browse' }, 
	{ to: '/', label: 'Learn More' },
	{ to: '/', label: 'Team' },
	// { to: '/user/dashboard', label: 'User Dashboard' },
	{ to: '/login', label: 'Log In' }
].map(
	link => {
		link.key = `nav-link-${link.href}-${link.label}`;
		return link;
	},
);

const Nav = () => {
	const [darkModeActive, setDarkMode] = useState(false);
	const toggleDarkMode = () => {
		setDarkMode(!darkModeActive);
		document.querySelector('body').classList.toggle('dark-mode');
	};

	return (
		<nav>
			<Link to="/" title="Home">
				<div className="logo">
					<img src={logo} alt="Revitalize logo" />
					<h2>Revitalize </h2>
				</div>
			</Link>

			<ul>
				{links.map(({ key, to, label }) => (
					<li className="navLinks" key={key}>
						<Link to={to} >{label}</Link>
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
