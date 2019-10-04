import React from 'react';

// images
import kerry from '../../../assets/AboutPage/kerry-photo.png';
import alex from '../../../assets/AboutPage/alex.png';
import clark from '../../../assets/AboutPage/clark.png';
import frank from '../../../assets/AboutPage/frank.png';
import jose from '../../../assets/AboutPage/jose.png';
import omar from '../../../assets/AboutPage/omar.png';
import ruth from '../../../assets/AboutPage/ruth.png';
import skyelar from '../../../assets/AboutPage/skyelar.png';
import anthony from '../../../assets/AboutPage/anthony.png';

const Squad = () => {
	const squad = [
		{
			name: 'Anthony Venturini',
			role: 'CEO/Product Manager',
			image: `${anthony}`,
			background: '#ffb588',
			bio:
				'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. ',
			github: 'https://github.com/adventurini',
			linkedIn: 'https://www.linkedin.com/in/adventurini/',
			twitter: 'https://twitter.com/adventurini',
			site: '',
		},
		{
			name: 'Kerry McPhearson',
			role: 'Product Design Evangelist',
			image: `${kerry}`,
			background: '#4840ba',
			bio:
				'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. ',
			github: '',
			linkedIn: 'https://www.linkedin.com/in/kerry-mcphearson-9b361193/',
			twitter: 'https://twitter.com/kerrybtone',
			site: '',
		},
		{
			name: 'Alexander Piroumian',
			role: 'Full Stack Developer',
			image: `${alex}`,
			background: '#f78539',
			bio:
				'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. ',
			github: 'https://github.com/AlexxanderP',
			linkedIn: 'https://www.linkedin.com/in/alexander-piroumian/',
			twitter: 'https://twitter.com/expertgoogler',
			site: 'http://alexanderpiroumian.com'
		},
		{
			name: 'Ruth Philips',
			role: 'Product Designer/UX Writer/Content Strategist',
			image: `${ruth}`,
			background: '#49a2ff',
			bio:
				'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. ',
			github: '',
			linkedIn: 'https://www.linkedin.com/in/ruth-philips/',
			twitter: 'https://twitter.com/Ruthmatt3',
			site: '',
		},
		{
			name: 'Jose Montero Jr',
			role: 'Full Stack Developer',
			image: `${jose}`,
			background: '#235597',
			bio:
				'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
			github: 'https://github.com/JoseMarioDev',
			linkedIn: 'https://www.linkedin.com/in/josemariodev/',
			twitter: 'https://twitter.com/josemariodev',
			site: 'https://josemariodev.github.io/',
		},
		{
			name: 'Elan Riznis',
			role: 'Full Stack Developer',
			image: 'https://res.cloudinary.com/revitalize/image/upload/v1570036576/about%20page/Elan_w397tt.svg',
			background: '#d6ad2f',
			bio:
				'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
			github: 'https://github.com/Zealll',
			linkedIn: 'https://www.linkedin.com/in/elan-riznis/',
			twitter: 'https://twitter.com/Zeal_l3',
			site: '',
		},
		{
			name: 'Omar Salah',
			role: 'Full Stack Developer',
			image: `${omar}`,
			background: '#d2405b',
			bio:
				'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
			github: 'https://github.com/OmarSalah95',
			linkedIn: 'https://www.linkedin.com/in/omar-salah-78787a180/',
			twitter: 'https://twitter.com/BugSquasher9000',
			site: '',
		},

		{
			name: 'Skyelar Carroll',
			role: 'Full Stack Developer',
			image: `${skyelar}`,
			background: '#4840ba',
			bio:
				'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
			github: 'https://github.com/Fractured2K',
			linkedIn: 'https://www.linkedin.com/in/skyelar-carroll-7567b217a/',
			twitter: 'https://twitter.com/Fractured2K',
			site: '',
		},

		{
			name: 'Clark Williams',
			role: 'Full Stack Developer',
			image: `${clark}`,
			background: '#0051be',
			bio:
				'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
			github: 'https://github.com/Cwill14',
			linkedIn: 'https://www.linkedin.com/in/clark-williams14/',
			twitter: 'https://twitter.com/clarktwilliams',
			site: 'https://theclarkwilliams.com',
		},
		{
			name: 'Frank Martinez',
			role: 'Full Stack Developer',
			image: `${frank}`,
			background: '#007ea7',
			bio:
				'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy.',
			github: 'https://github.com/LeTanque',
			linkedIn: 'https://www.linkedin.com/in/frankm3/',
			twitter: 'https://twitter.com/_letanque',
			site: '',
		},
	];

	return (
		<div className="squad-container">
			<h1 className="title">Meet The Squad</h1>
			<h3 className="description">Meet the people that make all of the magic happen behind the scenes.</h3>
			<div className="grid-container">
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
									<a href={person.github} alt="Github" target="_blank" rel="noopener noreferrer">
										<i className="fa fa-github"></i>
									</a>
									<a href={person.linkedIn} alt="LinkedIn" target="_blank" rel="noopener noreferrer">
										<i className="fa fa-linkedin"></i>
									</a>
									<a href={person.twitter} alt="Twitter" target="_blank" rel="noopener noreferrer">
										<i className="fa fa-twitter"></i>
									</a>
									<a href={person.site} alt="Personal Site" target="_blank" rel="noopener noreferrer">
										<i className="fa fa-user alt"></i>
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

export default Squad;
