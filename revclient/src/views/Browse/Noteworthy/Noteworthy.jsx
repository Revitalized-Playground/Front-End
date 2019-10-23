import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// import Slider from 'react-slick';

import CarouselCard from '../CarouselCard/CarouselCard';
import NoteworthySkeleton from './NoteworthySkeleton';

// Graphql
import { useQuery } from '@apollo/react-hooks';
import { GET_PROJECTS } from '../../../graphql/queries';

const Noteworthy = () => {
	const { loading, error, data } = useQuery(GET_PROJECTS);
	const [projectData, setProjectData] = useState();

	useEffect(() => {
		data && setProjectData(data.projects);
	}, [data]);

	if (loading) return <NoteworthySkeleton />;

	if (error) return console.log(error);

	return (
		<section className="noteworthy-section">
			<h4>New & Noteworthy</h4>
			<div className="slider">
				{projectData
					? projectData
							.slice(-2)
							.map((item, index) => (
								<CarouselCard
									key={item.id}
									card={item}
									view="noteworthy"
									index={index}
									name="Note Worthy"
								/>
							))
					: null}
			</div>
		</section>
	);
};

export default Noteworthy;
