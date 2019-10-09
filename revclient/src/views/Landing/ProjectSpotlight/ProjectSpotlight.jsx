import React, { useState } from 'react';

import rubiconPhones from '../../../assets/LandingPage/RubiconPhones.png';
import phoneLeft from "../../../assets/LandingPage/PhoneLeft.png";
import Theatre from '../../../assets/LandingPage/Theatre.svg';

const ProjectSpotlight = () => {
	const initStory =
		'Come see the journey of our students and industry experts restore an abandoned theatre to a modern state-of-the-art career school. The new school year will be starting Fall of 2020.';

	const [projectTitle] = useState('Alger Theatre - Detroit, MI');
	const [projectStory] = useState(initStory);

	// still need to make images dynamic

	return (
		<section className="project-spotlight-container">
			<div className="project-spotlight-content">
				<h2 className="section-title">Project Spotlight</h2>
				<div className="project-spotlight-phones-story">
					<div className='phoneContainer'>
						
						<img className="phone-left phone" src={phoneLeft} alt="cell phone" />
					</div>
					
					<div className="user-story">
						<img className="user-photo" src={Theatre} alt="Alger-Theater" />
						<h3 className="user-info">{projectTitle}</h3>
						<p>{projectStory}</p>
					</div>
					<div className='phoneContainer'>
						<img className="phone-right phone" src={rubiconPhones} alt="cell phone" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectSpotlight;
