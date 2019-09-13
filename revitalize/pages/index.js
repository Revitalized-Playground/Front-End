import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/Layout/Nav';
import LandingPage from '../pages/Landing/LandingPage';
import ProjectsHome from '../pages/ProjectsHome/ProjectsHome';

import '../styles/base.scss';

const Home = () => (
	<div>
		<Head></Head>
		<Nav />
		{/* <LandingPage /> */}
		<ProjectsHome />
	</div>
);

export default Home;
