import React from 'react';
import FeaturedProjects from './FeaturedProjects';
import TopSection from './TopSection';

const ProjectsHome = () => {
	return (
		<div className="projects-home">
			<TopSection />
			<FeaturedProjects />
		</div>
	);
};

export default ProjectsHome;
