import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

//Component Imports
import Nav from '../../components/Layout/Nav';
import Footer from '../../components/Layout/Footer';

import ShareModal from './Modals/ShareModal';
import DonateModal from './Modals/DonateModal';

import Donate from './ProjectDescription/Donate/Donate';
import DetailedDescription from './ProjectDescription/DetailedDescription/DetailedDescription';
import ProjectPictures from './ProjectDescription/ProjectPictures/ProjectPictures';
import ProjectComments from './ProjectDescription/ProjectComments/ProjectComments';
import BasicDescription from './ProjectDescription/DetailedDescription/BasicDescription/BasicDescription';

import CreatorProfile from './ProjectDescription/CreatorProfile/CreatorProfile';

// Graphql
import { useQuery } from '@apollo/react-hooks';
import { GET_PROJECT_BY_SLUG } from '../../graphql/queries';

// Helpers
import { useWindowHook } from '../../helpers/windowOnClickHook.js';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

import { StripeProvider, Elements } from 'react-stripe-elements';

const ProjectPage = ({ match }) => {
	const [copied, setCopied] = useState(false);
	const [donateModal, setDonateModal] = useState(false);
	const [bool, setBool] = useState(false);
	const [projectData, setProjectData] = useState();
	const [modalVal, setModalVal, carouselVal, setCarouselVal] = useWindowHook();
	const { loading, error, data, refetch } = useQuery(GET_PROJECT_BY_SLUG, {
		variables: { slug: match.params.slug },
	});
	useEffect(() => {
		data && setProjectData(data.projectBySlug);
	}, [data]);

	const val = e => {
		if (e.target.className === 'modal') {
			setModalVal(false);
		}
	};

	const carVal = e => {
		if (e.target.className === 'carousel-large-project') {
			setCarouselVal(false);
		} else if (e.target.className === 'car-pic') {
			setCarouselVal(true);
		}
	};

	const donateModalBlur = e => {
		if (e.target.className === 'donate-modal') {
			setDonateModal(false);
		}
	};

	const update = amount => {
		setBool(!bool);
		setProjectData({
			...projectData,
			project: {
				...projectData.project,
				donations: [...projectData.project.donations, { amount }],
			},
		});
	};

	if (error) return <h2>ERROR! Someone call Elan</h2>;
	if (loading || !data || !projectData) {
		return (
			<>
				<LoadingSpinner />
			</>
		);
	}

	console.log(data, 'newproj data', '\n', projectData);

	return (
		<>
			<Nav />
			<div className="project-page-container">
				<div className="singleProjectVectorContainer">
					<div className="singleProjectVector">
						<div className="blueSquare">
							<h1>{projectData.name}</h1>
							<div className="blueVector"></div>
						</div>
					</div>
				</div>
				<StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}>
					<Elements>
						<DonateModal
							update={update}
							donateModalBlur={donateModalBlur}
							donateModal={donateModal}
							setDonateModal={setDonateModal}
						/>
					</Elements>
				</StripeProvider>

				<ShareModal
					copied={copied}
					setCopied={setCopied}
					modalVal={modalVal}
					setModalVal={setModalVal}
					val={val}
				/>
				<div className="project-page-flex">
					<BasicDescription
						startDate={projectData.startDate}
						duration={projectData.duration}
						difficulty={projectData.difficulty}
						organizer={`${projectData.profile.firstName} ${projectData.profile.lastName}`}
					/>

					<Donate projectData={projectData} setModal={setModalVal} setDonateModal={setDonateModal} />
				</div>
				<div className="detailed-creator">
					<DetailedDescription
						startDate={projectData.projStartDate}
						duration={projectData.duration}
						difficulty={projectData.difficultyLevel}
						organizer={`${projectData.profile.firstName} ${projectData.profile.lastName}`}
						location={`${projectData.city}, ${projectData.state}`}
						projDescription={projectData.description}
					/>

					<CreatorProfile projectCreator={projectData.profile} />
				</div>
				<div className="tablet">
					<BasicDescription
						startDate={projectData.startDate}
						duration={projectData.duration}
						difficulty={projectData.difficulty}
						organizer={`${projectData.profile.firstName} ${projectData.profile.lastName}`}
					/>

					<DetailedDescription
						startDate={projectData.projStartDate}
						duration={projectData.duration}
						difficulty={projectData.difficultyLevel}
						organizer={`${projectData.profile.firstName} ${projectData.profile.lastName}`}
						location={`${projectData.city}, ${projectData.state}`}
						projDescription={projectData.description}
					/>
					<Donate
						raised={projectData.donations.reduce((acc, each) => Number(each.amount) + acc, 0)}
						budget={projectData.goalAmount}
						projectData={projectData}
						setModal={setModalVal}
					/>
					<CreatorProfile projectCreator={projectData.profile} />
				</div>
				<ProjectPictures projectPhotos={projectData.images} carouselVal={carouselVal} carVal={carVal} />
				<ProjectComments
					comments={projectData.comments}
					projectData={projectData}
					setProjectData={setProjectData}
					id={projectData.id}
					userId={projectData.profile.id}
				/>
			</div>
			<Footer />
		</>
	);
};

export default withRouter(ProjectPage);
