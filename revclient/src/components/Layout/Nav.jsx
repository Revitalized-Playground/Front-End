import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import Skeleton from "react-loading-skeleton";
import { FaMoon, FaCog, FaUser, FaWindowClose } from 'react-icons/fa';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER } from '../../graphql/queries/Users';

import { InitialAvatar } from '../../helpers/InitialAvatar.js';
import { useWindowHook } from '../../helpers/windowOnClickHook.js';

const unauthenticatedLinks = [
	{ href: '/projects', label: 'Projects' },
	{ href: '/about', label: 'Team' },
	{ href: '/login', label: 'Log In' },
].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});

const authenticatedLinks = [
	{ href: '/projects', label: 'Projects' },
	// { href: '/about', label: 'Team' },
	{ href: '/dashboard', label: 'Dashboard' },
	{ href: '/createproject', label: 'Create Project' },
	{ href: '/settings', label: 'Settings' },
	// { href:÷ '/messages', label: 'Messages' },
	{ href: '#', label: 'Logout' },
].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});

const Nav = props => {
	const [activeHamburger, setActiveHamburger] = useState(false);
	const [darkModeActive, setDarkMode] = useState(false);

	//custom hook for window.onClick
	const [
		// modal, setModal, carousel, setCarousel,
		clicked,
		setClicked,
	] = useWindowHook();

	const toggleDarkMode = () => {
		setDarkMode(!darkModeActive);
		localStorage.setItem('dark-mode', !darkModeActive);
	};

	const setActive = e => {
		if (e.target.className !== 'dropdown') {
			setActiveHamburger(!activeHamburger);
			setClicked(!clicked);
		}
	};

	useEffect(() => {
		if (JSON.parse(localStorage.getItem('dark-mode')) === true) {
			document.querySelector('body').classList.add('dark-mode');
		} else {
			document.querySelector('body').classList.remove('dark-mode');
		}
	}, [darkModeActive]);

	// Current user
	const { client, loading, error, data } = useQuery(GET_USER);

	const logout = () => {
		client.resetStore();
		localStorage.removeItem('token');
		props.history.push('/login');
	};

	if (localStorage.getItem('token')) {
		if (loading)
			return (
				<nav>
					<div className="leftNav">
						<Link to="/" title="Home">
							<div className="logo">
								<span>Revitalize </span>
								{/* <p className="loading-banner">loading....</p> */}
							</div>
						</Link>
					</div>
				</nav>
			);
		if (error)
			return (
				<nav>
					<div className="leftNav">
						<Link to="/" title="Home">
							<div className="logo">
								<span>Revitalize </span>
							</div>
						</Link>
					</div>
				</nav>
			);
	}

	return (
		<nav>
			<div className="leftNav">
				<Link to="/" title="Home">
					<div className="logo">
						<span>ReVitalize </span>
					</div>
				</Link>
			</div>

			<div className="right-nav">
				<ul>
					{localStorage.getItem('token') ? (
						<>
							{authenticatedLinks.map(link =>
								link.label === 'Create Project' ? (
									<Link to={link.href} key={link.key}>
										<button className="create-project-button">{link.label}</button>
									</Link>
								) : link.label === 'Logout' ? (
									<li className="navLinks logout" onClick={logout} key={link.key}>
										<Link to={link.href}>{link.label}</Link>
									</li>
								) : link.label === 'Settings' ? null : (
									<li className="navLinks" key={link.key}>
										<Link to={link.href}>{link.label}</Link>
									</li>
								),
							)}
							<div className="user" tabIndex="0" onClick={setActive}>
								{data.me.firstName !== null ? (
									<span className="user-personal-greeting">{`Welcome, ${data.me.firstName}`}</span>
								) : (
									<span className="user-personal-greeting">Welcome</span>
								)}

								{data.me.profileImage !== null ? (
									<img className="user-icon" src={data.me.profileImage} alt={data.me.firstName} />
								) : (
									<InitialAvatar
										height={40}
										width={40}
										className="user-icon"
										firstName={data.me.firstName}
										lastName={data.me.lastName}
										useRandomColor={1}
									/>
								)}

								<div className={`dropdown ${!clicked && 'display-none'}`} name="drop" tabIndex="0">
									<div className="arrow-up"></div>
									{/* <Link to="/dashboard" className="dropdown-option">
										<FaUser className="icon" />
										Dashboard
									</Link> */}
									<Link to="/settings" className="dropdown-option">
										<FaCog className="icon" /> Settings
									</Link>
									<div onClick={toggleDarkMode} className="dropdown-option">
										<FaMoon className="icon" />
										Dark mode
									</div>
									<div onClick={logout} className="dropdown-option">
										<FaWindowClose className="icon" />
										Log out
									</div>
								</div>
							</div>
						</>
					) : (
						<>
							{unauthenticatedLinks.map(({ key, href, label }) => (
								<li className="navLinks" key={key}>
									<Link to={href}>{label}</Link>
								</li>
							))}
							<li>
								<Link to="/register">
									<button className="register">Get Started</button>
								</Link>
							</li>
							<div className="dark-mode-emoji">
								<FaMoon onClick={() => toggleDarkMode()} />
							</div>
							{!localStorage.getItem('token') && (
								<div
									onClick={setActive}
									className={`hamburger hamburger--squeeze ${activeHamburger && 'is-active'}`}
									type="button"
								>
									<span className="hamburger-box">
										<span className="hamburger-inner"></span>
									</span>
								</div>
							)}
						</>
					)}
				</ul>
			</div>

			{activeHamburger && (
				<div className="overlay overlay-hugeinc">
					<div className="nav-overlay">
						<ul>
							{localStorage.getItem('token') ? (
								<>
									{authenticatedLinks.map(({ key, href, label }) =>
										label === 'Logout' ? (
											<li className="navLinks-overlay logout" onClick={logout} key={key}>
												<Link to={href}>{label}</Link>
											</li>
										) : (
											<li className="navLinks-overlay" key={key}>
												<Link to={href}>{label}</Link>
											</li>
										),
									)}
								</>
							) : (
								<ul>
									{unauthenticatedLinks.map(({ key, href, label }) => (
										<li className="navLinks-overlay" key={key}>
											<Link to={href}>{label}</Link>
										</li>
									))}
									<li>
										<Link to="/register">
											<button className="register">Get Started</button>
										</Link>
									</li>
								</ul>
							)}
						</ul>
					</div>
				</div>
			)}
		</nav>
	);
};

export default withRouter(Nav);
