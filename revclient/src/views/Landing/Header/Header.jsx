import React from 'react';

import heroImage from '../../../assets/LandingPage/HeroImage.png';
import crowdFundingImg from '../../../assets/LandingPage/Crowdfunding.svg';
import opportunitiesImg from '../../../assets/LandingPage/AO.svg';
import pathwaysImg from '../../../assets/LandingPage/TradePathways.svg';
// import greyRectangle from '../../../assets/LandingPage/GreyRectangle.png';


const Header = () => {
	return (
		<section className="header">
			<div className="cta-container">
				<div className="cta">
					<h2 className="cta-title">
						A modern approach to <br />
						building your community
					</h2>
					<h2 className="cta-title-tablet">
						A modern approach to
						building your community
					</h2>
					<p>
						Revitalize is a crowdfunding platform <br /> that creates apprenticeship opportunities.
					</p>
					<button>Start Your Journey!</button>
				</div>
				<div className="header-img-container">
					<img src={heroImage} alt="Hero" />
				</div>
			</div>

			<div className="values">
				<p>Values that will direct you to a successful career</p>
				<div className="value-tiles">
					<div className="tenacity">
						<h4>Tenacity</h4>
					</div>
					<div className="ingenuity">
						<h4>Ingenuity</h4>
					</div>
					<div className="growth">
						<h4>Growth</h4>
					</div>
					<div className="diligence">
						<h4>Diligence</h4>
					</div>
					<div className="resilience">
						<h4>Resilience</h4>
					</div>
					<div className="compassion">
						<h4>Compassion</h4>
					</div>
				</div>
			</div>
			<div
				className="what-we-do"
				style={{

				}}
			>
				<h2>What we do?</h2>
				<div className="learn-more-container">
					<div className="crowdFunding">
						<img src={crowdFundingImg} alt="Apply Now!" />
						<h3>Crowdfunding platform</h3>
						<a href="/">Learn More</a>
					</div>

					<div className="opportunities">
						<img src={opportunitiesImg} alt="opportunities" />
						<h3>Apprenticeship opportunities</h3>
						<a href="/">Learn More</a>
					</div>

					<div className="pathways">
						<img src={pathwaysImg} alt="trade pathways" />
						<h3>Trade License Pathways</h3>
						<a href="/">Learn More</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
