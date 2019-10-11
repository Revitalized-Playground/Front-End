import React, { useState, useEffect } from 'react';
import ShareModal from './Modals/ShareModal'
import DonateModal from './Modals/DonateModal'
import { withRouter } from 'react-router-dom';

//Component Imports
import Nav from '../../components/Layout/Nav';
import Footer from '../../components/Layout/Footer';

import Donate from './ProjectDescription/Donate/Donate';
import DetailedDescription from './ProjectDescription/DetailedDescription/DetailedDescription';
import ProjectPictures from './ProjectDescription/ProjectPictures/ProjectPictures';
import ProjectComments from './ProjectDescription/ProjectComments/ProjectComments';
import BasicDescription from './ProjectDescription/DetailedDescription/BasicDescription/BasicDescription';

import { useQuery } from '@apollo/react-hooks';
import { GET_PROJECT } from '../../graphql/queries';

import { useWindowHook } from "../../helpers/windowOnClickHook.js";

import { StripeProvider, Elements } from 'react-stripe-elements';


const ProjectPage = ({ match }) => {
	const [copied, setCopied] = useState(false);
	const [donateModal, setDonateModal] = useState(false)
	const [bool, setBool] = useState(false)

	console.log(bool)

	const [modalVal, setModalVal, carouselVal, setCarouselVal] = useWindowHook();

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

	const { loading, error, data, refetch} = useQuery(GET_PROJECT, {
		variables: { id: match.params.id },
	});
	const [projectData, setProjectData] = useState(data);

	console.log(data, 'newproj data')


	const donateModalBlur = e => {
		if(e.target.className === 'donate-modal') {
			setDonateModal(false)
		}
	}

	const update = (amount) => {
		setBool(!bool)
		setProjectData({
			...projectData,
			project: {
				...projectData.project,
				donations: [...projectData.project.donations, {amount}]
			}
		})
	}

	useEffect(() => {
		setProjectData(data);
	}, [data]);

	if (error) return <h2>ERROR! Someone call Elan</h2>;

	if (loading || !projectData) return <h3>Summoning magic!</h3>;
	return (
		<>
			<Nav />
			<div className="project-page-container">
				
				<div className="singleProjectVectorContainer">
					<div className="singleProjectVector">
						<div className="blueSquare">
							<h1>{projectData.project.name}</h1>
							<div className="blueVector"></div>
						</div>
					</div>
				</div>
				<StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}>
					<Elements>
						<DonateModal update={update} donateModalBlur={donateModalBlur} donateModal={donateModal} setDonateModal={setDonateModal} />
					</Elements>
				</StripeProvider>
				
				<ShareModal copied={copied} setCopied={setCopied} modalVal={modalVal} setModalVal={setModalVal} val={val} />
				<div className="project-page-flex">
					<BasicDescription
						startDate={projectData.project.startDate}
						duration={projectData.project.duration}
						difficulty={projectData.project.difficulty}
						organizer={`${projectData.project.profile.firstName} ${projectData.project.profile.lastName}`}
					/>
					<Donate
						raised={projectData.project.donations.reduce((acc, each) => Number(each.amount) + acc, 0)}
						budget={projectData.project.goalAmount}
						projectData={projectData}
						setModal={setModalVal}
						setDonateModal={setDonateModal}
					/>
				</div>
				<DetailedDescription
					organizer={`${projectData.project.profile.firstName} ${projectData.project.profile.lastName}`}
					location={`${projectData.project.city}, ${projectData.project.state}`}
					projDescription={projectData.project.description}
					projectCreator={projectData.project.profile}
				/>
				<ProjectPictures projectPhotos={projectData.project.images} carouselVal={carouselVal} carVal={carVal} />
				<ProjectComments
					comments={projectData.project.comments}
					projectData={projectData}
					setProjectData={setProjectData}
					id={projectData.project.id}
					userId={projectData.project.profile.id}
				/>
			</div>
			<Footer />
		</>
	);
};

export default withRouter(ProjectPage);
