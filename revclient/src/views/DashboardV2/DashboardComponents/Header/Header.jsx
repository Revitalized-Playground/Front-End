import React from 'react';
import { FaComments, FaFileInvoice, FaAngleDown } from "react-icons/fa";


const Header = props => {
	const { city, state, name, description, dueDate } = props.project;
	return (
		<div className="dashboard-header section">
			<div className="header-top">
				{props.project.isLive ? (
					<div className="project-status started">In Progress</div>
				) : (
					<div className="project-status not-started">Not Started</div>
				)}
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
					<p className="due-date">Due Date: {dueDate}</p>
					<div className="bottom-icons">
						<FaComments />
						<FaFileInvoice />
					</div>
				</div>
				<div className="header-bottom-seemore">
					<FaAngleDown
						onClick={() => props.setSelectedProject(props.project.id)}
					/>
				</div>
				<div className="team-members">
					<div className="member-icons">
						<p>Team Members</p>
						<img
							src="https://res.cloudinary.com/revitalize/image/upload/v1569861720/user%20dashboard/OliverCut_jsjnmx.png"
							alt="team member"
							className="dashboard-picture-icons"
						/>
						<img
							src="https://res.cloudinary.com/revitalize/image/upload/v1569861717/user%20dashboard/Greg_zvzyrc.png"
							alt="team member 2"
							className="dashboard-picture-icons"
						/>
						<div className="count">+10</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
