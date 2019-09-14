import React from 'react';
import FeaturedProjects from './FeaturedProjects.jsx';
import TopSection from './TopSection.jsx';
import FeaturedTrades from './FeaturedTrades.jsx';
import CurriculumOptions from './CurriculumOptions.jsx';


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
