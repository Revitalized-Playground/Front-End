import React from 'react';

import greyRectangle from '../../../assets/LandingPage/GreyRectangle.png';
import debtMan from '../../../assets/LandingPage/Debt man.png';

const OurPurpose = () => {
	return (
		<div className="our-purpose-wrapper">
			<section
				className="our-purpose"
				style={{
					background: `url(${greyRectangle})`,
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
				}}
			>
				<div className="our-purpose-cta">
					<div className="floated-tuition-cta">
						<h3 className="title">
							$0 Tuition upfront <span className="highlighted-text">.</span>
						</h3>
						<p>No additional loans to weigh you down!</p>
						<p>
							No payment until you are hired! Once hired, pay <br /> 10% of your income for 3 years.
						</p>
						<button>Start Now!</button>
						<img src={debtMan} alt="Debt man" />
					</div>
					<div className="our-purpose-content">
						<h3>OUR PURPOSE</h3>
						<div className="">
							<p className="mission-statement">
								{' '}
								Training next level professionals to
								<br />
								<span className="highlighted-text"> empower communities.</span>
							</p>
							<p>
								Revitalize is a project-based apprenticeship program providing hands on training and
								preparing our apprentices to transition to jobs in the industry.
							</p>
							<p>
								Our apprentices receive hands-on training daily from worldclass experts and instructors.
								Revitalize partners with local colleges to ensure students are prepared to enter the
								industry.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default OurPurpose;
