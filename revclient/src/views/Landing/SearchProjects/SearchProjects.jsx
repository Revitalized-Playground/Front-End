import React, {  } from 'react';
import SearchableMap from '../../../components/Map/SearchableMap'


const SearchProjects = () => {

	return (
		<section className="search-projects-near-you" id="search-map">
			<h2>Search For Apprenticeship Projects Near You!</h2>
			<SearchableMap />
		</section>
	);
};

export default SearchProjects;
