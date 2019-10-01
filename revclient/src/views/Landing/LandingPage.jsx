/**
 * * Description of component
 * TODO: things to do
 * @props description
 */
import React from 'react';

import Nav from '../../components/Layout/Nav';
import Footer from '../../components/Layout/Footer';

import Header from './Header/Header';
import ProjectSpotlight from './ProjectSpotlight/ProjectSpotlight';
import SearchProjects from './SearchProjects/SearchProjects';
import FeaturedProjects from './FeaturedProjects/FeaturedProjects';
import CrowdFunding from './CrowdFunding/CrowdFunding';
// import OurPurpose from './OurPurpose/OurPurpose';
// import OnTheJob from './OnTheJob/OnTheJob';
// import Testimonials from './Testimonials/Testimonials';
// import FullScaleApp from './FullScaleApp/FullScaleApp';

export default function LandingPage() {
	return (
		<>
		<Nav />
		<div className="landing">
			<Header />
			<CrowdFunding />
			<ProjectSpotlight />
			<FeaturedProjects />
			<SearchProjects />
			
			{/* <OurPurpose /> */}
			{/* <OnTheJob /> */}
			{/* <FullScaleApp /> */}
			{/* <Testimonials /> */}
		</div>
		<Footer />
		</>
	);
}
