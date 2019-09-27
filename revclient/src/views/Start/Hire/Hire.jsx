import React from 'react';

import Company from './Company/Company';

//images
import wework from '../../../assets/StartPage/Wework.svg';
import habitat from '../../../assets/StartPage/Habitat-For-Hummanity.svg';
import taskrabbit from '../../../assets/StartPage/taskrabbit.svg';

//logos
import weworkLogo from '../../../assets/StartPage/WeWork-logo-White.svg';
import habitatLogo from '../../../assets/StartPage/HHFH.svg';
import taskrabbitLogo from '../../../assets/StartPage/TR.svg';

//paintbrush strokes
import weworkBrush from '../../../assets/StartPage/Wework-paintbrush.svg';
import habitatBrush from '../../../assets/StartPage/HH4H-paintbrush.svg';
import taskrabbitBrush from '../../../assets/StartPage/Taskrabbit-Paintbrush.svg';

const Hire = () => {
	const companies = [
		{
			name: 'wework',
			image: `${wework}`,
			logo: `${weworkLogo}`,
			paintbrush: `${weworkBrush}`,
		},
		{
			name: 'Habitat for Humanity',
			image: `${habitat}`,
			logo: `${habitatLogo}`,
			paintbrush: `${habitatBrush}`,
		},
		{
			name: 'TaskRabbit',
			image: `${taskrabbit}`,
			logo: `${taskrabbitLogo}`,
			paintbrush: `${taskrabbitBrush}`,
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