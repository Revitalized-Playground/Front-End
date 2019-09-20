import React from 'react';
import Recommended from './Recommended/Recommended';
import FeaturedStories from './FeaturedStories/FeaturedStories';

const RecommendedPlusStories = () => {
	return (
		<div className="recommended-plus-stories">
			<Recommended />
			<FeaturedStories />
		</div>
	);
};

export default RecommendedPlusStories;
