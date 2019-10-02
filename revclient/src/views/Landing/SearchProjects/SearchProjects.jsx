import React, { } from 'react';

const SearchProjects = () => {

	return (
		<section className="search-projects-near-you">
			<div
				className="search-projects"
			>
				<h2>
					Search For Apprenticeship
					<br /> Projects Near You!
				</h2>
				<p className="description">
					Explore various projects trending in <br /> your local area and be the first to see <br /> what's
					going on.
				</p>
				<p className="description-tablet">
					Explore various projects trending in your local area and be the first to see what's
					going on.
				</p>
			</div>
			<div className="search-projects-map">Map goes here</div>
		</section>
	);
};

export default SearchProjects;
