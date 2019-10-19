import React, { useState, useEffect } from 'react';
import Card from '../../../components/Card/Card';

//gql
import { useQuery } from '@apollo/react-hooks';
import { GET_RECOMMENDED_PROJECTS } from '../../../graphql/queries/Projects';

const FeaturedProjects = () => {
	const { loading, error, data, refetch } = useQuery(GET_RECOMMENDED_PROJECTS);

	const [projectData, setProjectData] = useState();

	useEffect(() => {
		data && setProjectData(data.recommendedProjects);
	}, [data]);

	function shuffle(array) {
		var currentIndex = array.length,
			temporaryValue,
			randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	const randomizer = projectData && shuffle(projectData);

	console.log('projectdata is', projectData);

	if (!projectData) return <div>Loading...</div>;
	return (
		<section className="featured-projects-container">
			<h2>Featured Projects</h2>
			<div className="featured-projects-list">
				{randomizer.map(({ featuredImage, name, description }, i) =>
					i < 3 ? (
						<Card className="card" img={featuredImage} title={name} description={description} key={i} />
					) : null,
				)}
			</div>
		</section>
	);
};

export default FeaturedProjects;
