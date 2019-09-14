import React from 'react';
import FeaturedProjects from './FeaturedProjects.jsx';
import TopSection from './TopSection.jsx';
import FeaturedTrades from './FeaturedTrades.jsx';
import CurriculumOptions from './CurriculumOptions.jsx';
import CTAPlusTrades from './CTAplusTrending';
import SubscribeCTA from './SubscribeCTA/SubscribeCTA'

const ProjectsHome = () => {
	return (
		<div className="projects-home">
			<TopSection />
			<FeaturedTrades />
			<CurriculumOptions />
			<FeaturedProjects />
			<CTAPlusTrades />
			<SubscribeCTA />
		</div>
	);
};

export default ProjectsHome;
