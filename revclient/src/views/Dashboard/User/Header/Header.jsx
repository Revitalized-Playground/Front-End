import React from 'react';
import { FaComments, FaFileInvoice } from "react-icons/fa";


const Header = props => {
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
				<div className="header-middle-geo">
					{city}, {state}
				</div>
				<div className="header-middle-title">{name}</div>
				<p className="header-middle-description">{description}</p>
			</div>

			<div className="header-bottom">
				<div className="bottom-left">
					<p className="dueDate">Due Date: {dueDate}</p>
					<div className="bottom-icons">
						<FaComments />
						<FaFileInvoice />
					</div>
				</div>
				<div className="team-members">
					<div className="member-icons">
						<p>Team Members</p>
						<img
							src="https://res.cloudinary.com/revitalize/image/upload/v1569861720/user%20dashboard/OliverCut_jsjnmx.png"
							alt="team member"
							className="user-dashboard-picture-icons"
						/>
						<img
							src="https://res.cloudinary.com/revitalize/image/upload/v1569861717/user%20dashboard/Greg_zvzyrc.png"
							alt="team member 2"
							className="user-dashboard-picture-icons"
						/>
						<div className="count">+10</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
