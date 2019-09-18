import React, { useState } from 'react';

import heroImage from '../../../assets/LandingPage/Hero Image.png';
import applyNow from '../../../assets/LandingPage/Apply Now.png';
import donateNow from '../../../assets/LandingPage/Donate Now.png';
import searchNow from '../../../assets/LandingPage/Search Now.png';

const Header = () => {

	const [sHovered, setSHovered] = useState(false);
	const [dHovered, setDHovered] = useState(false);
	const [eHovered, setEHovered] = useState(false);





	return (
		<section className="header">
			<div className="cta-container">
				<div className="cta">
					<h2 className="cta-title">
						A modern approach to become <br />a licensed trades professional
					</h2>
					<p>
						Debt free hands-on education to rebuilding <br /> local communities through crowdfunding.
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

			<div className="application-links-container">
				<div
					className="students img-container"
					onClick={() => { }}
					onMouseOver={() => setSHovered(!sHovered)}
					onMouseOut={() => setSHovered(!sHovered)}
				// onMouseOver={e => e.target.value = "Learn next to world-class professionals"}
				// onMouseOver={() => toggleHover(hovered.students)}
				// onMouseOut={() => toggleHover(hovered.students)}
				>
					<img src={applyNow} alt="Apply Now!" />
					{!sHovered
						// { !hovered.students
						? <p>Apply Now!</p>
						: <p className="hovered">Learn next to world-class professionals</p>
						// : <p className={hovered ? "hovered" : ""}>Learn next to world-class professionals</p>

						// : <p className="hovered">Learn next to world-class professionals</p>

					}
				</div>

				<div
					className="donor img-container"
					onClick={() => { }}
					// onMouseOver={e => toggleHover(e)}
					// onMouseOut={e => toggleHover(e)}
					onMouseOver={() => setDHovered(!dHovered)}
					onMouseOut={() => setDHovered(!dHovered)}
				>
					<img src={donateNow} alt="Donate now" />
					{!dHovered
						? <p className="donate-text">Donate Now!</p>
						: <p className="donate-text hovered">Partner with us to rebuild communities</p>
					}
				</div>

				<div
					className="employers img-container"
					onClick={() => { }}
					// onMouseOver={e => toggleHover(e)}
					// onMouseOut={e => toggleHover(e)}
					onMouseOver={() => setEHovered(!eHovered)}
					onMouseOut={() => setEHovered(!eHovered)}
				>
					<img src={searchNow} alt="Search now" />
					{!eHovered
						? <p>Search Now!</p>
						: <p className="hovered">Hire qualified professionals hungry to<br /> make an impact</p>
					}

				</div>
			</div>
		</section>
	);
};

export default Header;
