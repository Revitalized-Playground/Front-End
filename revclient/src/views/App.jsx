import React from 'react';
// import Link from 'next/link';
// import Head from 'next/head';
import Nav from '../components/Layout/Nav';
import LandingPage from '../views/Landing/LandingPage';
import '../styles/base.scss';

const App = () => (
	<>
		<Nav />
		<LandingPage />
	</>
);

export default App;
