import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../components/Card/Card';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';

//gql
import { useQuery } from '@apollo/react-hooks';
import { GET_RECOMMENDED_PROJECTS } from '../../../graphql/queries/Projects';

const FeaturedProjects = () => {
	const { data } = useQuery(GET_RECOMMENDED_PROJECTS);

	const [projectData, setProjectData] = useState();

	useEffect(() => {
		data && setProjectData(data.recommendedProjects);
	}, [data]);

	function shuffle(array) {
		let currentIndex = array.length,
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

	if (!projectData) return <LoadingSpinner />;
	return (
		<section className="featured-projects-container">
			<h2>Featured Projects</h2>

			<div className="featured-projects-list">
				{randomizer.map(({ featuredImage, name, description, slug }, i) =>
					i < 3 ? (
						<Link to={`/project/${slug}`} className="link" key={i}>
							<Card className="card" img={featuredImage} title={name} description={description} key={i} />
						</Link>
					) : null,
				)}
			</div>
		</section>
	);
};

export default FeaturedProjects;
