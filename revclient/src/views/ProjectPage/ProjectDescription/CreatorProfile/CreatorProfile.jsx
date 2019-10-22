import React from 'react';
// import email from '../../../../assets/SingleProjectPage/email.png';
import { FaEnvelope } from "react-icons/fa";
import InitialAvatar from "../../../../components/InitialAvatar/InitialAvatar";

const CreatorProfile = ({ projectCreator }) => {
	return (
		<div className="creatorProfile">
			<div className="profile-center">
				{projectCreator.profileImage ? (
					<img className="profilePic" src={projectCreator.profileImage} alt="Profile" />
				) : (
					<InitialAvatar 
						firstName={projectCreator.firstName} 
						lastName={projectCreator.lastName}
						height="120" 
						width="120" 
						useRandomColor={1}
						className="creator-profile-image"
					/>
				)}
				<div className="creatorInfo">
					<h2>{`${projectCreator.firstName} ${projectCreator.lastName}`}</h2>
					<p>Project Organizer</p>
					<p>{`${projectCreator.city}, ${projectCreator.state}`}</p>
					<div className="email">
						<FaEnvelope />
						<h2>{projectCreator.email}</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreatorProfile;
