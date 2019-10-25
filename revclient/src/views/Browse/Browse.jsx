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
import { useQuery } from '@apollo/react-hooks';
// import { useLazyQuery } from '@apollo/react-hooks';
// import { QUERY_PROJECTS } from '../../graphql/queries';
import { GET_ALL_PROJECTS } from '../../graphql/queries/Projects'



const Projects = () => {
	const [ possibleInterest ] = useState([ "Electrical", "Carpentry", "Interior Design", "HVAC", "Plumbing", "Masonry" ])
	const [ showMore, setShowMore ] = useState({ allProjects: false, interest: "" });
	const [ projectState, setProjectState ] = useState();
	const [ toggleState, setToggleState ] = useState(false)


	// const [ queryProjects, { loading, data } ] = useLazyQuery( QUERY_PROJECTS );
	// const { loading, error, data } = useQuery( GET_PROJECTS );

	const {loading, error, data, refetch} = useQuery(GET_ALL_PROJECTS)

	useEffect(() => {
		// submitQuery()
		data && setProjectState({ projects: data.projects });
	}, [data]);

	// const submitQuery = async () => {
	// 	const queried = await queryProjects({ variables: { query: showMore.interest } })
	// 	console.log(queried);
	// }


	if (loading) return <LoadingSpinner />
	// if (error) return <h3>error</h3>;




	// if(data) {
	// 	console.log('recommended', data.getProjectsView.recommendedProjects)
	// }
	

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
						<Spotlight 
							loading={loading}
							error={error}
							data={data && data.getProjectsView.spotlight}
						/>
						<RecommendedProjects 
							loading={loading}
							error={error}
							data={data && data.getProjectsView.recommendedProjects}
							refetch={refetch}
							toggleState={toggleState}
							setToggleState={setToggleState}
						/>
						<CreateProject />
						<NearYou 
							loading={loading}
							error={error}
							data={data && data.getProjectsView.projectsNearYou}
						/>
						<Noteworthy 
							loading={loading}
							error={error}
							data={data && data.getProjectsView.newAndNoteworthyProjects}
						/>
						<Hire />
					</>
				) : null}
			</div>
			<Footer />
		</>
	);
};

export default Projects;
