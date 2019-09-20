import React from 'react';

import Nav from '../../components/Layout/Nav.jsx';
import Footer from '../../components/Layout/Footer.jsx';

// import FeaturedProjects from './FeaturedProjects.jsx';
import TopSection from './TopSection.jsx';
import FeaturedTrades from './FeaturedTrades.jsx';
import CurriculumOptions from './CurriculumOptions.jsx';
import CTAPlusTrades from './CTAplusTrending';
import SubscribeCTA from './SubscribeCTA/SubscribeCTA';
import RecommendedPlusStories from './RecomendedPlusStories/index.js';

const ProjectsHome = () => {
	return (
		<>
			<Nav />
			<div className="projects-home">
				<TopSection />
				<FeaturedTrades />
				<CurriculumOptions />
				{/* <FeaturedProjects /> */}
				<CTAPlusTrades />
				<SubscribeCTA />
				<RecommendedPlusStories />
			</div>
			<Footer />
		</>
	);
};

export default ProjectsHome;
