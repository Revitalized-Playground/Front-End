import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Squad from './Squad/Squad';
import Nav from '../../components/Layout/Nav';
import Footer from '../../components/Layout/Footer';

const About = () => {
	return (
		<div>
			<Nav />
			<Header />
			<Main />
			<Squad />

			<Footer />
		</div>
	);
};

export default About;
