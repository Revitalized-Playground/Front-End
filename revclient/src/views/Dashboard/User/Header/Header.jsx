import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Header = props => {
	console.log(props);
	const { status, city, state, name, description, dueDate } = props.project;
	return (
		<div className="user-dashboard-header section">
			<div className="header-top">
				<div className="project-status">{status}</div>
				<div className="add-tasks">
					<p>Add Tasks</p>
				</div>
			</div>

			<div className="header-middle">
				<h2>
					{city}, {state}
				</h2>
				<h2>{name}</h2>
				<p>{description}</p>
			</div>

			<div className="header-bottom">
				<p>Due Date: {dueDate}</p>
			</div>
		</div>
	);
};

export default Header;
