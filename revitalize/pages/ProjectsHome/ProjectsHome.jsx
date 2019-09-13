import React from 'react';
import FeaturedProjects from './FeaturedProjects';
import TopSection from './TopSection';
import FeaturedTrades from './FeaturedTrades'

const ProjectsHome = () => {
	return (
		<div className="projects-home">
			<TopSection />
            <FeaturedTrades />
			<FeaturedProjects />
		</div>
	);
};

export default ProjectsHome;