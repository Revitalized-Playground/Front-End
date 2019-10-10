import React from 'react';
import { Link } from 'react-router-dom';
import { FaComments, FaFileInvoice, FaAngleDown } from "react-icons/fa";

import { calculateDueDate } from "../../../../helpers/helpers";

// import { GET_PROJECT } from '../../../../graphql/queries/Projects';
// import { useQuery } from '@apollo/react-hooks';

const Header = props => {
	console.log('props donations', props.project.donations);
	const { city, state, name, description, startDate, duration, donations } = props.project;


	return (
		<div className="dashboard-header section">
			<div className="header-top">
				{props.project.isLive ? (
					<div className="project-status started">In Progress</div>
				) : (
					<div className="project-status not-started">Not Started</div>
				)}
			</div>

			<div className="header-middle">
				<div className="header-middle-geo">
					{city}, {state}
				</div>
				<div className="header-middle-title"><Link to={`/project/${props.project.id}`}>{name}</Link></div>
				<p className="header-middle-description">{description}</p>
				{donations && donations.map(donation => <p>Donation Amount: ${donation.amount}</p>)}
			</div>

			<div className="header-bottom">
				<div className="bottom-left">
					<p className="due-date">Due Date: {calculateDueDate(startDate, duration)}</p>
					<div className="bottom-icons">
						<FaComments />
						<FaFileInvoice />
					</div>
				</div>
				<div className="header-bottom-seemore">

					{!props.toggle
						? <button
							className="toggle-button"
							onClick={() => {
								props.setSelectedProject(props.project.id)
								props.setToggle(true)
								}}>
							Details
						</button>
						: <button
							className="toggle-button"
							onClick={() => {
								props.setToggle(false)
								}}>
							Back
						</button>
					}
					<button>						
						<Link to={`/project/${props.project.id}`}>
							View
						</Link>
					</button>
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
