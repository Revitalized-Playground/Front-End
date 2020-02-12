import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import SpotlightSkeleton from './SpotlightSkeleton';

// Graphql
import { useQuery } from '@apollo/react-hooks';
import { GET_PROJECTS_NEAR_ME } from '../../../graphql/queries';

const Spotlight = () => {
	const { loading, error, data } = useQuery(GET_PROJECTS_NEAR_ME);

	if (loading) return <SpotlightSkeleton />;

	if (error) return console.log(error);
	const shifty = data.projectsNearMe.shift();

	return (
		<div className="spotlight-container">
			<div className="spotlight-card" style={{ backgroundImage: `url(${shifty.featuredImage})` }}>
				<h2>SPOTLIGHT</h2>
				<h3>{shifty.name}</h3>
				<p>{shifty.description}</p>
				<Link to={`/project/${shifty.slug}`}>
					Learn more <FaAngleRight />
				</Link>
			</div>
		</div>
	);
};

export default Spotlight;
