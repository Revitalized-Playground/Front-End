import React, { useState } from 'react';
import SearchableMap from '../../../components/Map/SearchableMap'
const SearchProjects = () => {
	const [locationInput, setInput] = useState('');

	return (
		<section className="search-projects-near-you">
			{/* <form
				onSubmit={event => {
					event.preventDefault();
					setInput('');
				}}
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
				<div className="search-form">
					<input
						type="text"
						placeholder="Enter Location"
						value={locationInput}
						onChange={e => setInput(e.target.value)}
					/>
					<button>Search Now!</button> */}
				{/* </div> */}
			{/* </form> */}
			<SearchableMap className="fake-map" />
		</section>
	);
};

export default SearchProjects;
