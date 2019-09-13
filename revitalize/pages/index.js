import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/Layout/Nav';
import Footer from '../components/Layout/Footer';
import LandingPage from '../pages/Landing/LandingPage';
import ProjectsHome from '../pages/ProjectsHome/ProjectsHome';

import '../styles/base.scss';
import ProjectsHome from '../pages/ProjectsHome/ProjectsHome';

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
		<LandingPage />
		{/* <ProjectsHome /> */}
>>>>>>> 7b5cab6cb59d8d616b3344bbd38c8128c8eb8396
		<Footer />
	</div>
);

export default Home;
