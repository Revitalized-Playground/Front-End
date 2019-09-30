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
				<h3>
					{city}, {state}
				</h3>
				<h2>{name}</h2>
				<p className="header-middle-description">{description}</p>
			</div>

			<div className="header-bottom">
				<p className="dueDate">Due Date: {dueDate}</p>
				<div className="bottom-icons">
					<div className="comment-icon">
						<img src="" alt=""/>
					</div>
					<div className="form-icon"></div>
				</div>
				<div className="team-members">
					<p>Team Members</p>
					<div className="member-icons"></div>
				</div>
			</div>
		</div>
	);
};

export default Header;
