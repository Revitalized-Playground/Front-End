import React from 'react';
import Slider from 'react-slick';

import NearYouSkeleton from './NearYouSkeleton';
import CarouselCard from '../CarouselCard/CarouselCard';
import { NextArrow, PrevArrow } from '../CarouselCard/Arrows';

// Graphql
import { useQuery } from '@apollo/react-hooks';
import { GET_PROJECTS_NEAR_ME } from '../../../graphql/queries';

const NearYou = () => {
	const { loading, error, data } = useQuery(GET_PROJECTS_NEAR_ME);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 3,
		swipeToSlide: true,
		centerPadding: '400px',
		lazyLoad: 'on-demand',
		className: 'carousel-card',
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	if (loading) return <NearYouSkeleton />;

	if (error) return console.log(error);

	return (
		<section className="near-you-section">
			<h4>Local Projects</h4>
			<div className="slider">
				<Slider {...settings}>
					{data.projectsNearMe ? (
						data.projectsNearMe.map(nearYou => (
							<CarouselCard key={nearYou.id} card={nearYou} view="nearYou" />
						))
					) : (
						<NearYouSkeleton />
					)}
				</Slider>
			</div>
		</section>
	);
};

export default NearYou;
