import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { FaMoon } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaWindowClose } from 'react-icons/fa';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER } from '../../graphql/queries/Users';

import {useWindowHook} from './windowOnClickHook.js'

const uLinks = [
	{ href: '/browse', label: 'Browse' },
	{ href: '/projects', label: 'Learn More' },
	{ href: '/about', label: 'Team' },
	{ href: '/login', label: 'Log In' },
].map(link => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});
const aLinks = [
	{ href: '/browse', label: 'Browse' },
	{ href: '/projects', label: 'Learn More' },
	{ href: '/about', label: 'Team' },
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
		clicked, setClicked] = useWindowHook()

	// for testing
	// const toggleLoggedIn = () => setLoggedIn(!loggedIn);

	const toggleDarkMode = () => {
		setDarkMode(!darkModeActive);
		localStorage.setItem('dark-mode', !darkModeActive);
	};

	const setActive = (e) => {	
		if(e.target.className !== "dropdown"){	
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
		localStorage.removeItem('token');
		client.resetStore();
		props.history.push('/login');
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
						<span>Revitalize </span>
					</div>
				</Link>
			</div>

			<div className="right-nav">
				<ul>
					{localStorage.getItem('token') ? (
						<>
							{aLinks.map(({ key, href, label }) =>
								label === 'Logout' ? (
									<li className="navLinks logout" onClick={logout} key={key}>
										<Link to={href}>{label}</Link>
									</li>
								) : (
									<li className="navLinks" key={key}>
										<Link to={href}>{label}</Link>
									</li>
								),
							)}
							<div className="user fun" tabIndex="0" onClick={setActive} >
								<div className="fun">
									{data.me.firstName !== null ? (
										<span className="fun">{`Welcome, ${data.me.firstName}`}</span>
									) : (
										<span className="fun">Welcome</span>
									)}
								</div>
								{data.me.profileImage !== null ? (
									<img className="userIcon" src={data.me.profileImage} alt={data.me.firstName} />
								) : (
									<Skeleton className="userIcon" circle={true} height={40} width={40} />
								)}
								
									<div className={`dropdown ${!clicked && 'none'}`} name="drop" tabIndex="0" >
										<Link to="/dashboard" className="dropdown-option">
											<FaUser className="icon" />
											Profile
										</Link>
										<div className="dropdown-option">
											<FaCog className="icon" /> Setting
										</div>
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
									{aLinks.map(({ key, href, label }) =>
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
									{' '}
									{uLinks.map(({ key, href, label }) => (
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
