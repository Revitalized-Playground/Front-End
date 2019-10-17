import React from 'react';

const MessageFeed = props => {
	const { image, message } = props.user;
	return (
		<div className="feed-container">
			<div className="img-container">
				<img src={image} alt="user" />
				<div className="date">date</div>
			</div>
			<div className="feed-message">{message}</div>
		</div>
	);
};

export default MessageFeed;
