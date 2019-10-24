import React, {  } from 'react';

import ProjectCard from './ProjectCard/ProjectCard';
// import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';



const AllProjects = props => {
	const { projectQueryResults } = props;




	return (
		<>
			<div className="browse-all-container">

				<section className="browse-all-project-card-container">
					{projectQueryResults && projectQueryResults.projects
						? projectQueryResults.projects.map(project => <ProjectCard project={project} key={project.id} />)
						: null}
				</section>

			</div>
		</>
	);
};

export default AllProjects;
