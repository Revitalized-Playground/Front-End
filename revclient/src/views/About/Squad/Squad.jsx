import React from 'react';

// images
import kerry from '../../../assets/AboutPage/kerry.png';
import alex from '../../../assets/AboutPage/alex.png';
import clark from '../../../assets/AboutPage/clark.png';
import frank from '../../../assets/AboutPage/frank.png';
import jose from '../../../assets/AboutPage/jose2.png';
import omar from '../../../assets/AboutPage/omar.png';
import ruth from '../../../assets/AboutPage/ruth.png';
import skyelar from '../../../assets/AboutPage/skyelar.png';
import anthony from '../../../assets/AboutPage/anthony.png';
import elan from '../../../assets/AboutPage/elan.png';
import theia from '../../../assets/AboutPage/theia.png';
import Lucy from '../../../assets/AboutPage/Lucy.png';
const Squad = () => {
	const squad = [
		{
			name: 'Anthony Venturini',
			role: 'CEO/Product Manager',
			image: `${anthony}`,
			background: '#ffb588',
			bio:
				'Anthony is a team lead, aspiring product manager, and full-stack developer from San Francisco, CA. Anthony loves problem solving and finding solutions to complex issues.',
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
				'Kerry is a Product Designer from Atlanta Georgia & reps it hard. He’s a music aficionado that believes design can be accessible & elegant as nature.',
			github: '',
			linkedIn: 'https://www.linkedin.com/in/kerry-mcphearson-9b361193/',
			twitter: 'https://twitter.com/kerrybtone',
			site: '',
		},
		{
			name: 'Alexander Piroumian',
			role: 'Front-End Developer',
			image: `${alex}`,
			background: '#f78539',
			bio:
				'Alexander is a Front-End Web Developer from Santa Clarita,  California and is obsessed with code. He is a father of two and knows six tech stacks. He believes that code is the basis of everything on the internet.',
			github: 'https://github.com/AlexxanderP',
			linkedIn: 'https://www.linkedin.com/in/alexander-piroumian/',
			twitter: 'https://twitter.com/expertgoogler',
			site: 'http://alexanderpiroumian.com',
		},
		{
			name: 'Ruth Philips',
			role: 'Product Designer/UX Writer/Content Strategist',
			image: `${ruth}`,
			background: '#49a2ff',
			bio:
				'Ruth is a Product Designer from the San Francisco Bay Area and loves visiting National Parks. She believes that design is unique and can strike conversations.',
			github: '',
			linkedIn: 'https://www.linkedin.com/in/ruth-philips/',
			twitter: 'https://twitter.com/Ruthmatt3',
			site: '',
		},
		{
			name: 'Jose Montero Jr',
			role: 'Front-End Developer',
			image: `${jose}`,
			background: '#235597',
			bio:
				'Jose is a Front-End Web Developer from Chicago, IL. He loves poker, movies, and baseball. Jose wants to build projects that inspire, uplift, and empowers people.',
			github: 'https://github.com/JoseMarioDev',
			linkedIn: 'https://www.linkedin.com/in/josemariodev/',
			twitter: 'https://twitter.com/josemariodev',
			site: 'https://www.josemario.dev/',
		},
		{
			name: 'Elan Riznis',
			role: 'Front-End Developer',
			image: `${elan}`,
			background: '#d6ad2f',
			bio:
				'Elan is a Front-End Web Developer from Georgia(the country). He is literally next door to Alexander and shares a passion for code, especially on the back-end. Elan loves learning about financial markets, reading, traveling out in nature, and SLEEPING!',
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
				'Omar is a great developer from Los Angeles, Ca. Always ready to lend a helping hand he is Genuinely curious and follows that curiosity down to the minute details. He loves to learn regardless of what the new technology is or where it fits into the stack.  ',
			github: 'https://github.com/OmarSalah95',
			linkedIn: 'https://www.linkedin.com/in/omar-salah-78787a180/',
			twitter: 'https://twitter.com/BugSquasher9000',
			site: 'http://omar-salah-eddine.surge.sh',
		},

		{
			name: 'Skyelar Carroll',
			role: 'Full Stack Developer',
			image: `${skyelar}`,
			background: '#4840ba',
			bio:
				'Skyelar is a prodigy Full-Stack Engineer from Palmdale, California. Skelar loves video games..and did we mention code?. He approaches projects from a high level view and sleeps, eats, and breathes code.',
			github: 'https://github.com/Fractured2K',
			linkedIn: 'https://www.linkedin.com/in/skyelar-carroll-7567b217a/',
			twitter: 'https://twitter.com/Fractured2K',
			site: 'https://skyelar.dev',
		},

		{
			name: 'Clark Williams',
			role: 'Front-End Developer',
			image: `${clark}`,
			background: '#0051be',
			bio:
				'Clark is a  Front-End Web Developer from Lehi, Utah and loves code. Clark loves sports and history. Clark strongly believes that code can be used to improve lives for people.',
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
				'Frank is a Full-Stack Developer from Kelseyville, California and loves code. When not creating awesome projects, Frank likes to play the drums and Magic the Gathering.  He also enjoys a good cup of coffee over morning contemplation. ',
			github: 'https://github.com/LeTanque',
			linkedIn: 'https://www.linkedin.com/in/frankm3/',
			twitter: 'https://twitter.com/_letanque',
			site: '',
		},
		{
			name: 'Theia ',
			role: 'Our "Go To"',
			image: `${theia}`,
			background: '#82c7b3',
			bio:
				'Theia was always there for the team providing emotional support.  She loves walks in the park, belly rubs, and of course, treats!',
			github: '',
			linkedIn: '',
			twitter: '',
			site: '',
		},
		{
			name: 'Lucy',
			role: 'The Equalizer',
			image: `${Lucy}`,
			background: '#007ea7',
			bio:
				'Lucy created balance and added sass to our team. She resides in Los Angeles, California and enjoys lounging in the sun, being in your personal space, and chasing after neighborhood kids. ',
			github: '',
			linkedIn: '',
			twitter: '',
			site: '',
		},
	];

	return (
		<div className="squad-container">
			<h1 className="title">Meet The Squad</h1>
			<h3 className="description">Meet the people that make all of the magic happen behind the scenes.</h3>
			<div className="grid-container">
				<div className="squad">
					{squad.map((person, index) => (
						<div className={`person index${index}`} style={{ backgroundColor: `${person.background}` }}>
							{index !== 13 ? (
								<>
									<h2 className="name"> {person.name}</h2>
									<h3 className="role"> {person.role}</h3>
									<div className="img-container">
										<img src={person.image} alt="person" />
									</div>
									<div className="overlay">
										<div className="text">{person.bio}</div>
										<div className="social">
											{person.github && (
												<a
													href={person.github}
													alt="Github"
													target="_blank"
													rel="noopener noreferrer"
												>
													<i className="fa fa-github"></i>
												</a>
											)}
											{person.linkedIn && (
												<a
													href={person.linkedIn}
													alt="LinkedIn"
													target="_blank"
													rel="noopener noreferrer"
												>
													<i className="fa fa-linkedin"></i>
												</a>
											)}
											{person.twitter && (
												<a
													href={person.twitter}
													alt="Twitter"
													target="_blank"
													rel="noopener noreferrer"
												>
													<i className="fa fa-twitter"></i>
												</a>
											)}
											{person.site && (
												<a
													href={person.site}
													alt="Personal Site"
													target="_blank"
													rel="noopener noreferrer"
												>
													<i className="fa fa-user alt"></i>
												</a>
											)}
										</div>
									</div>
								</>
							) : null}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Squad;
