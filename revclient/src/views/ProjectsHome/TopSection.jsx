import React from 'react';
import topIssue from "../../assets/ProjectPage/top issue.png";

const TopSection = () => {
	return (
		<section className="top">
			<div className="cta-container">
				<div className="cta">
					<h2 className="cta-title">Project Experiences</h2>
					<p>
						No missed opportunities!
						<br />
						Explore our trade pathways and <br />
						choose one that best fits you.
					</p>
					<button>Create a Project</button>
				</div>
				<img alt='Dashboard logo' src={topIssue} />
			</div>
		</section>
	);
};

export default TopSection;
