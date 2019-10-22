import React from 'react';
import Loader from 'react-loader-spinner';

const LoadingSpinner = () => {
	return (
		<section className="loading-spinner">
			<Loader
				type="Circles"
				color="#4840ba"
				height={100}
				width={100}
				timeout={3000} //3 secs
			/>
		</section>
	);
};

export default LoadingSpinner;
