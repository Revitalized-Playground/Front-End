import React from 'react';
import FeaturedProjects from './FeaturedProjects';
import TopSection from './TopSection';
import FeaturedTrades from './FeaturedTrades'
import CurriculumOptions from './CurriculumOptions'

const ProjectsHome = () => {
	return (
		<div className="projects-home">
			<TopSection />
            <FeaturedTrades />
            <CurriculumOptions />
			<FeaturedProjects />
		</div>
	);
};

export default ProjectsHome;