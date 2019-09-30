import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Header = props => {
	const { city, state, name, description } = props;
	return (
		<div className="user-dashboard-header section">
			<h5>{city}</h5>
		</div>
	);
};

export default Header;
