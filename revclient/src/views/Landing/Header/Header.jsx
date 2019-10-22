import React from 'react';
import { Link } from 'react-router-dom';

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
					<h2 className="cta-title-tablet">A modern approach to building your community</h2>
					<p>
						ReVitalize is a crowdfunding platform <br /> that creates apprenticeship opportunities
					</p>
					{localStorage.getItem('token') ? (
						<Link to="/projects">
							<button>Start Your Journey!</button>
						</Link>
					) : (
						<Link to="/register">
							<button>Start Your Journey!</button>
						</Link>
					)}
				</div>
				<img src={heroImage} alt="Hero" />
			</div>

			<div className="values">
				<p>Values that will direct you to a successful career</p>
				<div className="value-tiles">
					<div className="tenacity">
						<span>Tenacity</span>
					</div>
					<div className="ingenuity">
						<span>Ingenuity</span>
					</div>
					<div className="growth">
						<span>Growth</span>
					</div>
					<div className="diligence">
						<span>Diligence</span>
					</div>
					<div className="resilience">
						<span>Resilience</span>
					</div>
					<div className="compassion">
						<span>Compassion</span>
					</div>
				</div>
			</div>
			<div className="what-we-do" style={{}}>
				<h2>What we do?</h2>
				<div className="learn-more-container">
					<div className="crowdFunding">
						<img src={crowdFundingImg} alt="Apply Now!" />
						<h3>Crowdfunding platform</h3>
						{/* <a href="/">Learn More</a> */}
						<a href="/">Learn More</a>
						<p className="toolTip">
							Raise money for projects in your community using our crowdfunding platform
						</p>
					</div>

					<div className="opportunities">
						<img src={opportunitiesImg} alt="opportunities" />
						<h3>Apprenticeship opportunities</h3>
						<a href="/">Learn More</a>
						<p className="toolTip">
							Find apprentice opportunities in your community using our local database
						</p>
					</div>

					<div className="pathways">
						<img src={pathwaysImg} alt="trade pathways" />
						<h3>Trade License Pathways</h3>
						<a href="/">Learn More</a>
						<p className="toolTip">
							Learn trades from top trades professionals and earn your trade license
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
