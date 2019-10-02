import React from 'react';

const Squad = () => {
	const squad = [
		{
			name: 'Anthony Venturini',
			role: 'CEO/Product Manager',
			image: './theia.png',
			background: '#ffb588',
		},
		{
			name: 'Kerry McPhearson',
			role: 'Product Design Evangelist',
			image: './theia.png',
			background: '#4840ba',
		},
		{
			name: 'Alexander Piroumian',
			role: 'Full Stack Developer',
			image: './theia.png',
			background: '#f78539',
		},
		{
			name: 'Ruth Philips',
			role: 'Product Designer/UX Writer/Content Strategist',
			image: './theia.png',
			background: '#49a2ff',
		},
		{
			name: 'Jose Montero Jr',
			role: 'Full Stack Developer',
			image: './theia.png',
			background: '#235597',
		},
		{
			name: 'Elan Riznis',
			role: 'Full Stack Developer',
			image: './theia.png',
			background: '#d6ad2f',
		},
		{
			name: 'Omar Salah',
			role: 'Full Stack Developer',
			image: './theia.png',
			background: '#d2405b',
		},
		{
			name: 'Skyelar Carroll',
			role: 'Full Stack Developer',
			image: './theia.png',
			background: '#4840ba',
		},
		{
			name: 'Clark Williams',
			role: 'Full Stack Developer',
			image: './theia.png',
			background: '#0051be',
		},
		{
			name: 'Frank Martinez',
			role: 'Full Stack Developer',
			image: './theia.png',
			background: '#007ea7',
		},
	];

	return (
		<div className="squad-container">
			<h1 className="title">Meet The Squad</h1>
			<h3 className="description">Meet the people that make all of the magic happen behind the scenes.</h3>
			<div className="grid-container">
				{squad.map(person => (
					<div className="squad-flex-one" style={{ backgroundColor: `${person.background}` }}>
						<h2 className="name"> {person.name}</h2>
						<h3 className='role'> {person.role}</h3>
						<img src={person.image} alt="person" />
					</div>
				))}
			</div>
		</div>
	);
};

export default Squad;
