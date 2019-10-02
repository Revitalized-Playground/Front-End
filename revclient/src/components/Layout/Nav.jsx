import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

import logo from '../../assets/LandingPage/Logo.png';
import { FaMoon } from 'react-icons/fa';

import { useQuery } from '@apollo/react-hooks';
import { GET_USER } from '../../graphql/queries/Users';

const uLinks = [
	{ href: '/browse', label: 'Browse' },
	{ href: '#', label: 'Learn More' },
	{ href: '/about', label: 'Team' },
	{ href: '/login', label: 'Log In' },
].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});
const aLinks = [
	{ href: '/browse', label: 'Browse' },
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
	const [clicked, setClicked] = useState(false);

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
		if (JSON.parse(localStorage.getItem('dark-mode')) === true) {
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
		if (error) return <p>Error....</p>;
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
								<div>
									{data.me.firstName !== null ? `Welcome, ${data.me.firstName}` : 'Welcome'}
								</div>
								{data.me.profileImage !== null
									? <img className="userIcon" src={data.me.profileImage} alt={data.me.firstName}/>
									: <Skeleton className="userIcon" circle={true} height={40} width={40} />
								}
							</div>
							{clicked && (
								<div className="dropdown">
									<Link to="/dashboard" className="dropdown-option">Profile</Link>
									<div className="dropdown-option">Setting</div>
									<div onClick={toggleDarkMode} className="dropdown-option">
										<FaMoon />
										&nbsp; Dark mode: {darkModeActive ? 'on' : 'off'}
									</div>
									<div onClick={logout} className="dropdown-option">Log out</div>
								</div>
							)}
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
								<span className="hamburger-box">
									<span className="hamburger-inner"></span>
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
