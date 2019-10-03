import React from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
// import Squad from './Squad/Squad';
import Squad2 from './Squad/Squad2';
import Nav from '../../components/Layout/Nav';
import Footer from '../../components/Layout/Footer';

const About = () => {
	return (
		<div>
			<Nav />
			<Header />
			<Main />
			{/* <Squad /> */}
			<Squad2 />
			<Footer />
		</div>
	);
};

export default About;
