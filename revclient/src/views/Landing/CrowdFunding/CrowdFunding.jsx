import React from 'react';
import { Link } from 'react-router-dom';

import Progress1v2 from '../../../assets/LandingPage/Progress1v2.png';
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
				<img src={Progress1v2} alt="Drywall" />
				<img src={Progress2} alt="TableSaw" />
				<img src={Progress3} alt="ladders" />
			</div>
			<p className="do-you-know">Do you know of a building near you that needs to be Revitalized?</p>
			<div className="center">
			{localStorage.getItem("token")
				? <Link to="/createproject"><button className="create-button"> Create a Project</button></Link>
				: <Link to="/login"><button className="create-button"> Create a Project</button></Link>
			}
			</div>
		</div>
	);
};

export default CrowdFunding;
