import React, { useState, useEffect } from 'react';

import Nav from '../../components/Layout/Nav';
import Footer from '../../components/Layout/Footer';

import Top from './Top/Top';
import ProjectCard from './ProjectCard/ProjectCard';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';


// Graphql
import { useLazyQuery } from '@apollo/react-hooks';
import { QUERY_PROJECTS } from '../../graphql/queries';

const BrowseAll = () => {
	const [ projectState, setProjectState ] = useState();
	const [ queryFormState, setQueryFormState ] = useState({ query: "" });

	// const { loading, error, data } = useQuery( GET_PROJECTS );
	const [ queryProjects, { loading, data } ] = useLazyQuery( QUERY_PROJECTS );


	useEffect(() => {
		submitQuery()
		data && setProjectState({ projects: data.projects });

	}, [data]);

	const submitQuery = async () => {
		const queried = await queryProjects({ variables: { query: queryFormState.query } })
		console.log(queried);
	}



	if (loading) return <LoadingSpinner />
	// if (error) return <h3>error</h3>;

	return (
		<>
			<Nav />
			<div className="browse-all-container">
				
				<Top submitQuery={submitQuery} queryFormState={queryFormState} setQueryFormState={setQueryFormState}  />

				

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
