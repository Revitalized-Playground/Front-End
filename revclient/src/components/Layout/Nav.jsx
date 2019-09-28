import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import logo from '../../assets/LandingPage/Logo.png';
// import darkModeEmoji from '../../assets/Global/Nav/night-mode-512.png';
// import lightModeEmoji from '../../assets/Global/Nav/night-mode-512.png';
import { FaMoon } from 'react-icons/fa';

import { useQuery } from '@apollo/react-hooks';
import { GET_USER } from '../../graphql/queries/Users';

const uLinks = [
	{ href: '/start', label: 'Browse' },
	{ href: '#', label: 'Learn More' },
	{ href: '#', label: 'Team' },
	{ href: '/login', label: 'Log In' },
].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});
const aLinks = [
	{ href: '/createproject', label: 'Create a project' },
	{ href: '/projects', label: 'Community' },
	{ href: '#', label: 'Help' },
].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});

const Nav = props => {
	const [activeHamburger, setActiveHamburger] = useState(false);
	const [darkModeActive, setDarkMode] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);
	const [clicked, setClicked] = useState(false);

	// for testing
	// const toggleLoggedIn = () => setLoggedIn(!loggedIn);

	const toggleDropdown = () => {
		setClicked(!clicked);
	};

	const toggleDarkMode = () => {
		setDarkMode(!darkModeActive);
		localStorage.setItem('dark-mode', !darkModeActive);
	};

	const setActive = () => {
		setActiveHamburger(!activeHamburger);
	};

	useEffect(() => {
		if (JSON.parse(localStorage.getItem('dark-mode')) == true) {
			document.querySelector('body').classList.add('dark-mode');
		} else {
			document.querySelector('body').classList.remove('dark-mode');
		}
	}, [darkModeActive]);

	// Current user
	const { client, loading, error, data } = useQuery(GET_USER);

	const logout = () => {
		localStorage.removeItem('token');
		client.resetStore();
		props.history.push('/');
	};

	if (localStorage.getItem('token')) {
		if (loading) return <p>loading....</p>;
	}

	return (
		<nav>
			<div className="leftNav">
				<Link to="/" title="Home">
					<div className="logo">
						<img src={logo} alt="Revitalize logo" />
						<h2>Revitalize </h2>
					</div>
				</Link>
			</div>
			<div className="right-nav">
				<ul>
					{localStorage.getItem('token') ? (
						<>
							{aLinks.map(({ key, href, label }) => (
								<li className="navLinks" key={key}>
									<Link to={href}>{label}</Link>
								</li>
							))}
							<div className="user" onClick={toggleDropdown}>
								<div className="welcome">
									{data.me.firstName !== null ? `Welcome, ${data.me.firstName}` : 'Welcome'}
								</div>
								
								{data.me.profileImage !== null
									? <img className="userIcon" src={data.me.profileImage}/>
									: <Skeleton className="userIcon" circle={true} height={30} width={30} />
								}
								{clicked && (
									<div className="dropdown">
										<Link to="/dashboard">Profile</Link>
										<div>Setting</div>
										<div onClick={toggleDarkMode}>
											<FaMoon />
											&nbsp; Dark mode: {darkModeActive ? 'on' : 'off'}
										</div>
										<div onClick={logout}>Log out</div>
									</div>
								)}
							</div>
						</>
					) : (
						<>
							{' '}
							{uLinks.map(({ key, href, label }) => (
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
							<button
								onClick={setActive}
								className={`hamburger hamburger--squeeze ${activeHamburger && 'is-active'}`}
								type="button"
							>
								<span class="hamburger-box">
									<span class="hamburger-inner"></span>
								</span>
							</button>
						</>
					)}
				</ul>
			</div>
		</nav>
	);
};

export default withRouter(Nav);
