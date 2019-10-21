import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';

import CarouselCard from '../CarouselCard/CarouselCard';
import NoteworthySkeleton from './NoteworthySkeleton';

// Graphql
import { useQuery } from '@apollo/react-hooks';
import { GET_PROJECTS } from '../../../graphql/queries';

const Noteworthy = () => {
	const { loading, error, data } = useQuery(GET_PROJECTS);
	const [projectData, setProjectData] = useState();

	useEffect(() => {
		data && setProjectData(data);
	}, [data]);

	console.log('project data :', projectData);

	const noteworthyData = [
		{
			id: 1,
			name: 'Camp Crystal Lake',
			description:
				'NU Energy team is Revitalize’s upcoming project focused on renewable and sustainable energy. Experts in the wind energy industry share their knowledge and best practices with future wind turbine technicians.',
			state: 'IA',
			city: 'Urbandale',
			goalAmount: 0.0,
			amountFunded: 0.0,
			images: ['https://res.cloudinary.com/revitalize/image/upload/v1569451140/start%20page/Windmill_jvynbk.svg'],
			featuredImage:
				'https://res.cloudinary.com/revitalize/image/upload/v1569451140/start%20page/Windmill_jvynbk.svg',
			liked: false,
		},
		{
			id: 2,
			name: 'Camp Crystal Lake',
			description:
				'Alger Theatre is one of Detroit’s well loved and iconic theatre. Multiple prospects compete to decide the future of Alger Theatre. Residents of the city hold the fate of Alger Theatre. What will the residents decide?',
			state: 'MI',
			city: 'Detroit',
			goalAmount: 0.0,
			amountFunded: 0.0,
			images: [
				'https://res.cloudinary.com/revitalize/image/upload/v1569451143/start%20page/Alger_theater_Dark_Mode_Pic_inlldb.svg',
			],
			featuredImage:
				'https://res.cloudinary.com/revitalize/image/upload/v1569451143/start%20page/Alger_theater_Dark_Mode_Pic_inlldb.svg',
			liked: false,
		},
	];

	if (loading) return <NoteworthySkeleton />;

	if (error) return console.log(error);

	return (
		<section className="noteworthy-section">
			<h4>New & Noteworthy</h4>
			<div className="slider">
				{noteworthyData
					? noteworthyData.map((item, index) => (
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
