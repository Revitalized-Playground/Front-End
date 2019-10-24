import React, { useEffect, useState } from 'react';

// Layout
import Nav from '../../components/Layout/Nav';
import Footer from '../../components/Layout/Footer';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

// Components
import Top from './Top/Top';
import Spotlight from './Spotlight/Spotlight';
import RecommendedProjects from './RecommendedProjects/RecommendedProjects';
import NearYou from './NearYou/NearYou';
import CreateProject from './CreateProject/CreateProject';
import Noteworthy from './Noteworthy/Noteworthy';
import Hire from './Hire/Hire';
import AllProjects from "../AllProjects/AllProjects";

// Graphql
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { GET_PROJECTS, QUERY_PROJECTS } from '../../graphql/queries';

const Projects = () => {
	const [ possibleInterest ] = useState([ "Electrical", "Carpentry", "Interior Design", "HVAC", "Plumbing", "Masonry" ])
	const [ showMore, setShowMore ] = useState({ allProjects: false, interest: "" });
	const [ projectState, setProjectState ] = useState();


	const [ queryProjects, { loading, data } ] = useLazyQuery( QUERY_PROJECTS );
	// const { loading, error, data } = useQuery( GET_PROJECTS );


	useEffect(() => {
		submitQuery()
		data && setProjectState({ projects: data.projects });
	}, [data]);

	const submitQuery = async () => {
		const queried = await queryProjects({ variables: { query: showMore.interest } })
		console.log(queried);
	}


	if (loading) return <LoadingSpinner />
	// if (error) return <h3>error</h3>;

	return (
		<>
			<Nav />
			<div className="browse-container">
				<Top  setShowMore={setShowMore}  showMore={showMore} possibleInterest={possibleInterest}   />
				{showMore.allProjects === true ? (
					<>
						<AllProjects projectQueryResults={projectState} />
					</>
				) : null}
				{showMore.allProjects === false ? (
					<>
						<Spotlight />
						<RecommendedProjects />
						<CreateProject />
						<NearYou />
						<Noteworthy />
						<Hire />
					</>
				) : null}
			</div>
			<Footer />
		</>
	);
};

export default Projects;
