import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Header = props => {
	console.log(props);
	const { status, city, state, name, description, dueDate } = props.project;
	return (
		<div className="user-dashboard-header section">
			<div className="header-top">
				<div className="project-status">{status}</div>
				{/* <div className="add-tasks">
					<p>Add Tasks</p>
				</div> */}
			</div>

			<div className="header-middle">
				<h3>
					{city}, {state}
				</h3>
				<h2>{name}</h2>
				<p className="header-middle-description">{description}</p>
			</div>

			<div className="header-bottom">
				<div className="bottom-left">
					<p className="dueDate">Due Date: {dueDate}</p>
					<div className="bottom-icons">
						<img
							src="https://res.cloudinary.com/revitalize/image/upload/v1569861723/user%20dashboard/3_plus_comments_k4zcus.svg"
							alt="comment bubble"
						/>

						<img
							src="https://res.cloudinary.com/revitalize/image/upload/v1569861717/user%20dashboard/Forms_Icon_wzp5t8.svg"
							alt="form"
						/>
					</div>
				</div>
				<div className="team-members">
					<p>Team Members</p>
					<div className="member-icons">
						<img
							src="https://res.cloudinary.com/revitalize/image/upload/v1569861720/user%20dashboard/OliverCut_jsjnmx.png"
							alt="team member"
						/>
						<img
							src="https://res.cloudinary.com/revitalize/image/upload/v1569861717/user%20dashboard/Greg_zvzyrc.png"
							alt="team member 2"
						/>
						<p className="count">+10</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
