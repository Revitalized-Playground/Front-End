import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/Layout/Nav';
import Footer from '../components/Layout/Footer';
import LandingPage from '../pages/Landing/LandingPage';
import ProjectsHome from '../pages/ProjectsHome/ProjectsHome';

import '../styles/base.scss';

const Home = () => (
	<div>
		<Head>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
			></link>
		</Head>
		<Nav />
<<<<<<< HEAD
    {/* <LandingPage /> */}
    <ProjectsHome />
=======
		{/* <LandingPage /> */}
		<ProjectsHome />
		<Footer />
>>>>>>> abdd8afa5d5fb519362fef9650499557ae3cf672
	</div>
);

export default Home;
