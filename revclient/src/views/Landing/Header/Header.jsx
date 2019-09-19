import React, { useState } from 'react';

import heroImage from '../../../assets/LandingPage/Hero Image.png';
import crowdFundingImg from '../../../assets/LandingPage/Crowdfunding.svg';
import opportunitiesImg from '../../../assets/LandingPage/AO.svg';
import pathwaysImg from '../../../assets/LandingPage/TradePathways.svg';

const Header = () => {
	return (
		<section className="header">
			<div className="cta-container">
				<div className="cta">
					<h2 className="cta-title">
						A modern approach to <br />
						revitalizing your community
					</h2>
					<p>
						Revitalize is a community crowdfunding platform <br /> for apprenticeships.
					</p>
					<button>Start Your Journey Now!</button>
				</div>
				<img src={heroImage} alt="Hero" />
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
			<div className="what-we-do"></div>
			<h2>What we do?</h2>
			<div className="application-links-container">
				<div className="students img-container">
					<img src={crowdFundingImg} alt="Apply Now!" />
				</div>

				<div className="donor img-container">
					<img src={opportunitiesImg} alt="opportunities" />
				</div>

				<div className="employers img-container">
					<img src={pathwaysImg} alt="trade pathways" />
				</div>
			</div>
		</section>
	);
};

export default Header;
