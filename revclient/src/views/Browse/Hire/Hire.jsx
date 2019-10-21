import React from 'react';

import Company from './Company/Company';

//images
import wework from '../../../assets/BrowsePage/Wework.svg';
import habitat from '../../../assets/BrowsePage/Habitat-For-Hummanity.svg';
import taskrabbit from '../../../assets/BrowsePage/taskrabbit.svg';

//logos
import weworkLogo from '../../../assets/BrowsePage/WeWork-logo-White.svg';
import habitatLogo from '../../../assets/BrowsePage/HHFH.svg';
import taskrabbitLogo from '../../../assets/BrowsePage/TR.svg';

//paintbrush strokes
import weworkBrush from '../../../assets/BrowsePage/Wework-paintbrush.svg';
import habitatBrush from '../../../assets/BrowsePage/HH4H-paintbrush.svg';
import taskrabbitBrush from '../../../assets/BrowsePage/Taskrabbit-Paintbrush.svg';

const Hire = () => {
	const companies = [
		{
			name: 'wework',
			image: `${wework}`,
			logo: `${weworkLogo}`,
			paintbrush: `${weworkBrush}`,
			link: 'https://www.wework.com'
		},
		{
			name: 'Habitat for Humanity',
			image: `${habitat}`,
			logo: `${habitatLogo}`,
			paintbrush: `${habitatBrush}`,
			link: 'https://www.habitat.org'
		},
		{
			name: 'TaskRabbit',
			image: `${taskrabbit}`,
			logo: `${taskrabbitLogo}`,
			paintbrush: `${taskrabbitBrush}`,
			link: 'https://www.taskrabbit.com'
		},
	];

	return (
		<div className="hireContainer">
			<h4>Employers that Hire Our Apprentices</h4>
			<div className="companies">
				{companies.map(c => {
					return <Company key={c.name} info={c} />;
				})}
			</div>
		</div>
	);
};

export default Hire;
