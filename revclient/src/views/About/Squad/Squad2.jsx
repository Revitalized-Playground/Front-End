import React from 'react';

// images
import kerry from "../../../assets/AboutPage/kerry.png";
import alex from "../../../assets/AboutPage/alex.png";
import clark from "../../../assets/AboutPage/clark.png";
import frank from "../../../assets/AboutPage/frank.png";
import jose from "../../../assets/AboutPage/jose.png";
import omar from "../../../assets/AboutPage/omar.png";
import ruth from "../../../assets/AboutPage/ruth.png";
import skyelar from "../../../assets/AboutPage/skyelar.png";
import anthony from "../../../assets/AboutPage/anthony.png";


const Squad2 = () => {
	const squad = [
		{
			name: 'Anthony Venturini',
			role: 'CEO/Product Manager',
			image: `${anthony}`,
			background: '#ffb588',
			bio:
				'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. ',
			github: '',
			facebook: '',
			linkedIn: '',
			twitter: '',
		},
		{
			name: 'Kerry McPhearson',
			role: 'Product Design Evangelist',
			image: `${kerry}`,
			background: '#4840ba',
			bio: '',
			github: '',
			facebook: '',
			linkedIn: '',
			twitter: '',
		},
		{
			name: 'Alexander Piroumian',
			role: 'Full Stack Developer',
			image: `${alex}`,
			background: '#f78539',
			bio: '',
			github: 'https://github.com/AlexxanderP',
			facebook: '',
			linkedIn: 'https://www.linkedin.com/in/alexander-piroumian/',
			twitter: 'https://twitter.com/expertgoogler',
		},
		{
			name: 'Ruth Philips',
			role: 'Product Designer/UX Writer/Content Strategist',
			image: `${ruth}`,
			background: '#49a2ff',
			bio: '',
			github: '',
			facebook: '',
			linkedIn: '',
			twitter: '',
		},
		{
			name: 'Jose Montero Jr',
			role: 'Full Stack Developer',
			image: `${jose}`,
			background: '#235597',
			bio: '',
			github: 'https://github.com/JoseMarioDev',
			facebook: '',
			linkedIn: 'https://www.linkedin.com/in/josemariodev/',
			twitter: 'https://twitter.com/josemariodev',
		},
		{
			name: 'Elan Riznis',
			role: 'Full Stack Developer',
			image: 'https://res.cloudinary.com/revitalize/image/upload/v1570036576/about%20page/Elan_w397tt.svg',
			background: '#d6ad2f',
			bio: '',
			github: '',
			facebook: '',
			linkedIn: '',
			twitter: '',
		},
		{
			name: 'Omar Salah',
			role: 'Full Stack Developer',
			image: `${omar}`,
			background: '#d2405b',
			bio: '',
			github: '',
			facebook: '',
			linkedIn: '',
			twitter: '',
		},

		{
			name: 'Skyelar Carroll',
			role: 'Full Stack Developer',
			image: `${skyelar}`,
			background: '#4840ba',
			bio: '',
			github: '',
			facebook: '',
			linkedIn: '',
			twitter: '',
		},

		{
			name: 'Clark Williams',
			role: 'Full Stack Developer',
			image: `${clark}`,
			background: '#0051be',
			bio: '',
			github: 'https://github.com/Cwill14',
			facebook: '',
			linkedIn: 'https://www.linkedin.com/in/clark-williams14/',
			twitter: 'https://twitter.com/clarktwilliams',
		},
		{
			name: 'Frank Martinez',
			role: 'Full Stack Developer',
			image: `${frank}`,
			background: '#007ea7',
			bio: '',
			github: '',
			facebook: '',
			linkedIn: '',
			twitter: '',
		},
	];

	return (
		<div className="squad-container">
			<h1 className="title">Meet The Squad</h1>
			<h3 className="description">Meet the people that make all of the magic happen behind the scenes.</h3>
			<div className="flex-container">
				<div className="squad">
					{squad.map(person => (
						<div className={`person ${person.name}`} style={{ backgroundColor: `${person.background}` }}>
							<h2 className="name"> {person.name}</h2>
							<h3 className="role"> {person.role}</h3>
							<div className="img-container">
								<img src={person.image} alt="person" />
							</div>
							<div className="overlay">
								<div className="text">{person.bio}</div>
								<div className="social">
									<a href={person.github} alt="Github">
										{' '}
										<i className="fa fa-github"></i>{' '}
									</a>
									<a href={person.facebook} alt="Facebook">
										{' '}
										<i className="fa fa-facebook"></i>{' '}
									</a>
									<a href={person.linkedIn} alt="LinkedIn">
										{' '}
										<i className="fa fa-linkedin"></i>{' '}
									</a>
									<a href={person.twitter} alt="Twitter">
										{' '}
										<i className="fa fa-twitter"></i>{' '}
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Squad2;
