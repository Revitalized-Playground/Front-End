import React from 'react';
import email from '../../../../assets/SingleProjectPage/email.png';

const CreatorProfile = ({ projectCreator }) => {
	return (
		<div className="creatorProfile">
			<div className="profile-center">
				<img className="profilePic" src={projectCreator.profileImage} alt="Profile" />
				<div className="creatorInfo">
					<h2>{`${projectCreator.firstName} ${projectCreator.lastName}`}</h2>
					<p>Project Organizer</p>
					<p>{`${projectCreator.city}, ${projectCreator.state}`}</p>
					<div className="email">
						<img src={email} alt="email icon" />
						<h2>{projectCreator.email}</h2>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreatorProfile;
