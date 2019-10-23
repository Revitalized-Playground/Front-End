import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';

// Graphql
import { useQuery } from '@apollo/react-hooks';
import { GET_PROJECTS_NEAR_ME } from '../../../graphql/queries';

const Spotlight = () => {
	const { loading, error, data } = useQuery(GET_PROJECTS_NEAR_ME);

	// const [projectData, setProjectData] = useState();

	// useEffect(() => {
	// 	data && setProjectData(data.projects);
	// }, [data]);

	if (loading) return <LoadingSpinner />;

	if (error) return console.log(error);

	console.log('projectData: ', data);
	return (
		<div className="spotlight-container">
			{data.projectsNearMe
				? data.projectsNearMe.slice(0, 1).map(spotlight => (
						<div className="spotlight-card" style={{ backgroundImage: `url(${spotlight.featuredImage})` }}>
							<h2>SPOTLIGHT</h2>
							<h3>{spotlight.name}</h3>
							<p>{spotlight.description}</p>
							<Link to={`/project/${spotlight.slug}`}>
								Learn more <FaAngleRight />
							</Link>
						</div>
				  ))
				: null}
		</div>
	);
};

export default Spotlight;
