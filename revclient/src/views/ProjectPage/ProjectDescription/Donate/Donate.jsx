import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { formatMoney, addUpDonations, donationCount } from '../../../../helpers/helpers';
import ProgressBar from '../../../../components/ProgressBar/ProgressBar';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER } from '../../../../graphql/queries/Users';

// import '@lottiefiles/lottie-player'; // WTH is this?

const Donate = props => {
	const raised = addUpDonations(props.projectData.donations);
	const budget = formatMoney(props.projectData.goalAmount);
	const budgetProgressBar = props.projectData.goalAmount;
	const totalDonations = donationCount(props.projectData.donations.length);
	const totalNumberOfDonations = props.projectData.donations ? totalDonations : 0;
	const [applicationStatus, setApplicationStatus] = useState('notApplied');
	// const [isProjectCreator, setIsProjectCreator] = useState(false);

	console.log('props', props);

	const { data } = useQuery(GET_USER);

	useEffect(() => {
		if (props.projectData.applicants && data) {
			props.projectData.applicants.map(eachApplicant => {
				if (eachApplicant.profile.id === data.me.id) {
					setApplicationStatus(eachApplicant.status);
				}
			});

			if (props.projectData.profile.id === data.me.id) {
				props.setIsProjectCreator(true);
			}
		}
	}, [props.projectData.applicants, data]);

	return (
		<div className="donateContainer">
			<div className="donateInnerDiv">
				<p className="donationMoney">
					<span className="large">${raised}</span>
					<span className="small">raised out of ${budget}</span>
				</p>
				<div className="progress-bar">
					<ProgressBar progress={raised} startingPoint={budgetProgressBar} />
				</div>
				<p className="donatorCount">{totalNumberOfDonations}</p>
				<p className="donorText">{`${totalNumberOfDonations === 1 ? 'Donor' : 'Donors'}`}</p>
				<div className="donationButtons">
					{/* <Link to={`/project/donate/${match.params.id}`}> */}
					{props.isProjectCreator ? (
						<Link to="/dashboard">
							<button className="purple">Dashboard</button>
						</Link>
					) : (
						<button
							className="purple"
							onClick={() => {
								props.setDonateModal(true);
								props.setModalDisplay('flex');
								props.setInnerModalDisplay('');
							}}
						>
							Donate now
						</button>
					)}
					<button className="white" onClick={() => props.setModal(true)}>
						Share
					</button>
				</div>
				{!props.isProjectCreator && (
					<div className="mid-line-container">
						<div className="mid-line"></div>
						<p>or</p>
						<div className="mid-line"></div>
					</div>
				)}
				{!props.isProjectCreator && (
					<div className="apply-button">
						{applicationStatus.toLowerCase() === 'pending' ? (
							<button style={{ cursor: 'default', background: '#c4c4c4' }} disabled={true}>
								Application Pending...
							</button>
						) : applicationStatus.toLowerCase() === 'accepted' ? (
							<Link to="/dashboard">
								<button>Dashboard</button>
							</Link>
						) : (
							<Link to={`/project/${props.match.params.slug}/studentapplicationform`}>
								<button>Apply to Project</button>
							</Link>
						)}
					</div>
				)}
				{!props.isProjectCreator && (
					<p className="lastText">
						Partner with growing donors who are eager to see the transformation and economical growth of
						Detroit.
					</p>
				)}
			</div>
		</div>
	);
};

export default withRouter(Donate);
