import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/Layout/Nav';
import Footer from '../components/Layout/Footer';
import LandingPage from '../pages/Landing/LandingPage';
import '../styles/base.scss';

const Home = () => (
	<div>
		<Head></Head>
		<Nav />
		<LandingPage />
		<Footer />
	</div>
);

export default Home;
