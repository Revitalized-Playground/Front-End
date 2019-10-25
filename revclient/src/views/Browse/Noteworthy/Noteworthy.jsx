import React from 'react';
import CarouselCard from '../CarouselCard/CarouselCard';
import NoteworthySkeleton from './NoteworthySkeleton';

const Noteworthy = ({loading, error, data}) => {

	if (loading) return <NoteworthySkeleton />;

	if (error) return console.log(error);

	return (
		<section className="noteworthy-section">
			<h4>New & Noteworthy</h4>
			<div className="slider">
				{data
					? data
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
