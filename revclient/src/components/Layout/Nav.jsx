import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/LandingPage/Logo.png';
import darkModeEmoji from '../../assets/Global/Nav/smiling-face-with-sunglasses_1f60e.svg';
import lightModeEmoji from '../../assets/Global/Nav/electric-light-bulb_1f4a1.svg';
const links = [{ href: '#', label: 'About' }, { href: '#', label: 'Trades' }, { href: '#', label: 'Community' },{ href: '#', label: 'Donate' }].map(
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
				<Link to="/login"><button className="login">Login</button></Link>
				<Link to="/register"><button className="register">Get Started</button></Link>
			</ul>
			<img
				className="dark-mode-emoji"
				src={darkModeActive ? lightModeEmoji : darkModeEmoji}
				alt="Darkmode Toggle"
				onClick={() => toggleDarkMode()}
			/>
		</nav>
	);
};
export default Nav;
