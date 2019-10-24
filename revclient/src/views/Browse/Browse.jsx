import React from 'react';

import Nav from '../../components/Layout/Nav';
import Footer from '../../components/Layout/Footer';

import Top from './Top/Top';
import Spotlight from './Spotlight/Spotlight';
import RecommendedProjects from './RecommendedProjects/RecommendedProjects';
import NearYou from './NearYou/NearYou';
import CreateProject from './CreateProject/CreateProject';
import Noteworthy from './Noteworthy/Noteworthy';
import Hire from './Hire/Hire';

import { GET_ALL_PROJECTS } from '../../graphql/queries/Projects'
import { useQuery } from '@apollo/react-hooks';

const Start = () => {
	const {loading, error, data, refetch} = useQuery(GET_ALL_PROJECTS)

	return (
		<>
			<Nav />
			<div className="browse-container">
				<Top />
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
			</div>
			<Footer />
		</>
	);
};

export default Start;
