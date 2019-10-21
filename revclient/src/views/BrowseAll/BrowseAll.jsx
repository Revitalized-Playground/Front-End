import React, { useState, useEffect } from 'react';

import Nav from '../../components/Layout/Nav';
import Footer from '../../components/Layout/Footer';

import Top from './Top/Top';
import ProjectCard from './ProjectCard/ProjectCard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

// Graphql
import { useQuery } from '@apollo/react-hooks';
import { GET_PROJECTS } from '../../graphql/queries';

const BrowseAll = () => {
	const [projectState, setProjectState] = useState();
	const { loading, error, data } = useQuery(GET_PROJECTS);

	useEffect(() => {
		data && setProjectState({ projects: data.projects });
	}, [data]);

	if (loading) return <LoadingSpinner />;
	if (error) return <h3>error</h3>;

	return (
		<>
			<Nav />
			<div className="browse-all-container">
				<Top />

				<section className="browse-all-project-card-container">
					{projectState && projectState.projects
						? projectState.projects.map(project => <ProjectCard project={project} key={project.id} />)
						: null}
				</section>
			</div>
			<Footer />
		</>
	);
};

export default BrowseAll;
