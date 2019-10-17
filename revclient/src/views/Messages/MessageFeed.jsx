import React from 'react';

const MessageFeed = props => {
	return (
		<>
			{props.user.map(user => (
				<div className="feed-container">
					<div className="img-container">
						<img src={user.image} alt="user" />
						<div className="date">date</div>
					</div>
					<div className="feed-message">{user.message}</div>
				</div>
			))}
		</>
	);
};

export default MessageFeed;
