import React from 'react';
import FeaturedProjects from './FeaturedProjects.jsx';
import TopSection from './TopSection.jsx';
import FeaturedTrades from './FeaturedTrades.jsx';
import CurriculumOptions from './CurriculumOptions.jsx';
import CTAPlusTrades from './CTAplusTrending';
import SubscribeCTA from './SubscribeCTA/SubscribeCTA'
import RecommendedPlusStories from './RecomendedPlusStories/index.js';

const ProjectsHome = () => {
	return (
		<div className="projects-home">
			<TopSection />
			<FeaturedTrades />
			<CurriculumOptions />
			<FeaturedProjects />
			<CTAPlusTrades />
			<SubscribeCTA />
			<RecommendedPlusStories />
		</div>
	);
};

export default ProjectsHome;
