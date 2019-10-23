import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SpotlightSkeleton = () => {
	return (
		<>
			<section className="skeleton-slider">
				<Skeleton count={1} height={300} width={1400} />
			</section>
		</>
	);
};

export default SpotlightSkeleton;
