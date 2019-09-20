import React from 'react';

import Progress1 from '../../../assets/LandingPage/Progress1.svg';
import Progress2 from '../../../assets/LandingPage/Progress2.png';
import Progress3 from '../../../assets/LandingPage/Progress3.png';
const CrowdFunding = () => {
	return (
		<div className="crowdfunding-container">
			<h2 className="crowdfunding-header"> Crowdfunding for community projects you care about</h2>
			<p className="Explore">
				Explore and donate to projects that inspire you and <br /> empower generations{' '}
			</p>
			<div className="img-container">
				<img src={Progress1} alt="Drywall" />
				<img src={Progress2} alt="TableSaw" />
				<img src={Progress3} alt="ladders" />
			</div>
			<p className="do-you-know">Do you know of a building near you that needs to be Revitalized?</p>
			<button className="create-button"> Create a Project</button>
		</div>
	);
};

export default CrowdFunding;
