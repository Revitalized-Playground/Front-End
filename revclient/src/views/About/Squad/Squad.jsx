import React from 'react';

const Squad = () => {
	const squad = [
		{
			name: 'Anthony Venturini',
			role: 'CEO/Product Manager',
			image: '',
			background: '#ffb588',
		},
		{
			name: 'Kerry McPhearson',
			role: 'Product Design Evangelist',
			image: '',
			background: '#4840ba',
		},
		{
			name: 'Alexander Piroumian',
			role: 'Full Stack Developer',
			image: '',
			background: '#f78539',
		},
		{
			name: 'Ruth Philips',
			role: 'Product Designer/UX Writer/Content Strategist',
			image: '',
			background: '#49a2ff',
		},
		{
			name: 'Jose Montero Jr',
			role: 'Full Stack Developer',
			image: '',
			background: '#235597',
		},
		{
			name: 'Elan Riznis',
			role: 'Full Stack Developer',
			image: '',
			background: '#d6ad2f',
		},
		{
			name: 'Omar Salah',
			role: 'Full Stack Developer',
			image: '',
			background: '#d2405b',
		},
		{
			name: 'Skyelar Carroll',
			role: 'Full Stack Developer',
			image: '',
			background: '#4840ba',
		},
		{
			name: 'Clark Williams',
			role: 'Full Stack Developer',
			image: '',
			background: '#0051be',
		},
		{
			name: 'Frank Martinez',
			role: 'Full Stack Developer',
			image: '',
			background: '#007ea7',
		},
	];
	return (
		<div className="squad-container">
			<h1 className="title">Meet The Squad</h1>
			<h3 className="description">Meet the people that make all of the magic happen behind the scenes.</h3>
			<div className="flex-container">
				<div className="squad-flex-one"></div>
				<div className="squad-flex-two"></div>
				<div className="squad-flex-three"></div>
			</div>
		</div>
	);
};

export default Squad;
