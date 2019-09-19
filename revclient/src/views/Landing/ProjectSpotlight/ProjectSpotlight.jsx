import React, { useState } from 'react';

import rubiconPhones from '../../../assets/LandingPage/RubiconPhones.png';
import teamRubicon from '../../../assets/LandingPage/Team Rubicon.png';

const ProjectSpotlight = () => {
	const initStory =
		'Come see the journey of our students and industry experts restore an abandoned school building to a modern state-of-the-art career school. The new school year will be starting Fall of 2020. Thank you to our amazing donors and partners for inspiring our apprentices.';

	const [projectTitle, setProjectTitle] = useState('Team Rubicon - Flint, MI');
	const [projectStory, setProjectStory] = useState(initStory);

	// still need to make images dynamic

	return (
		<section className="project-spotlight">
			<h2 className="section-title">Project&nbsp;Spotlight</h2>
			<img className="phone-left phone" src={rubiconPhones} alt="cell phone" />
			<div className="user-story">
				<img className="user-photo" src={teamRubicon} alt="Alger-Theater" />
				<h2 className="user-info">{projectTitle}</h2>
				<p>{projectStory}</p>
			</div>
			<img className="phone-right phone" src={rubiconPhones} alt="cell phone" />
		</section>
	);
};

export default ProjectSpotlight;
