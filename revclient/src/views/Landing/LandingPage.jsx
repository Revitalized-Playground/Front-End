import React from 'react';

import Nav from '../../components/Layout/Nav.jsx';
import Footer from "../../components/Layout/Footer.jsx";

import Header from './Header/Header';
import OurPurpose from './OurPurpose/OurPurpose';
import OnTheJob from './OnTheJob/OnTheJob';
import FeaturedProjects from './FeaturedProjects/FeaturedProjects';
import SearchProjects from './SearchProjects/SearchProjects';
import Testimonials from './Testimonials/Testimonials';
import FullScaleApp from './FullScaleApp/FullScaleApp';

/**
 * * Description of component
 * TODO: things to do
 * @props description
 */

export default function LandingPage() {
	return (
		<>
			<Nav />
			<Header />
			<OurPurpose />
			<OnTheJob />
			<FullScaleApp />
			<FeaturedProjects />
			<SearchProjects />
			<Testimonials />
			<Footer />
		</>
	);
}
