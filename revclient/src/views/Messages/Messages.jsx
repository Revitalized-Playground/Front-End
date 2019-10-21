import React from 'react';
import MessageUser from './MessageUser';
import MessageFeed from './MessageFeed';
import MessageInput from './MessageInput';

import jose from '../../assets/AboutPage/jose.png';
import clark from '../../assets/AboutPage/clark.png';

const Messages = () => {
	const users = [
		{
			image: `${jose}`,
			name: 'jose',
			messages: [{ message: 'send' }, { message: 'second' }, { message: 'third' }],
		},
		{
			image: `${clark}`,
			name: 'clark',
			messages: [{ message: 'response' }, { message: 'recd' }, { message: 'third' }],
		},
	];

	return (
		<>
			<div className="message-container">
				<div className="message-user">
					{users.map(user => (
						<MessageUser user={user} />
					))}
				</div>
				<div className="message-feed-container">
					<div className="message-feed">
						<MessageFeed user={users} />
					</div>
					<div className="message-input">
						<MessageInput />
					</div>
				</div>
			</div>
		</>
	);
};

export default Messages;
