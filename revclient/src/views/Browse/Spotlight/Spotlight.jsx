import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import SpotlightSkeleton from './SpotlightSkeleton';

const Spotlight = ({loading, error, data}) => {
	if (loading) return <SpotlightSkeleton />;

	if (error) return console.log(error);

	return (
		<div className="spotlight-container">
			<div className="spotlight-card" style={{ backgroundImage: `url(${data.featuredImage})` }}>
				<h2>SPOTLIGHT</h2>
				<h3>{data.name}</h3>
				<p>{data.description}</p>
				<Link to={`/project/${data.slug}`}>
					Learn more <FaAngleRight />
				</Link>
			</div>
		</div>
	);
};

export default Spotlight;
