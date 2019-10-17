import React from 'react';

const MessageUser = props => {
	console.log('props:', props);
	const { image, name, message } = props.user;

	return (
		<div className="user-container">
			<div className="user-left">
				<div className="img-container">
					<img src={image} alt="user" />
				</div>
				<div className="message-info">
					<h3>{name}</h3>
					<p>{message}</p>
				</div>
			</div>
			<div className="user-right">
				<h4>Date</h4>
			</div>
		</div>
	);
};

export default MessageUser;
