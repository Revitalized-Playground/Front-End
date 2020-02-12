import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

// Components
import Tab from './TabComponent/Tab';
// import Task from "./TasksComponent/Task";
import People from "./People/People";
// import PeopleHeader from "./People/PeopleHeader";
import Trades from "./Trades/Trades";
import TradesHeader from "./Trades/TradesHeader";
import Analytics from "./Analytics/Analytics";
import NoContent from "./NoContent/NoContent";

// Helpers
// import { inLastWeek } from "../../../../helpers/helpers";
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";

// GQL
import { useQuery } from '@apollo/react-hooks';
import { useMutation } from '@apollo/react-hooks';

import { GET_PROJECT_BY_ID } from '../../../../graphql/queries';

import { ACCEPT_PROJECT_APPLICANT } from '../../../../graphql/mutations';

const MainProjectAdmin = props => {
	const { project, mainTabs, setMainTabs, setAddTaskModal, dashNavTabState, possibleDashNavTabs } = props;
	
	const [ projectData, setProjectData ] = useState({ project: project })
	
	const { loading, error, data } = useQuery(GET_PROJECT_BY_ID, {
		variables: { id: project.id },
	});

	const [ acceptProjectApplicant ] = useMutation(ACCEPT_PROJECT_APPLICANT, {
		update(
			cache,
			{
				data: { acceptProjectApplicant },
			},
			) {
				const { projectById } = cache.readQuery({
					query: GET_PROJECT_BY_ID,
					variables: { id: data.projectById.id },
				});
				// console.log("Cache inside of mutation  ", cache, "\nprojectById", projectById );
				cache.writeQuery({
					query: GET_PROJECT_BY_ID,
					data: { projectById: projectById.trades.concat([acceptProjectApplicant]) },
				});
			},
		}
	);
		
	const [ projectApplicantState, setProjectApplicantState ] = useState({
		project: '', // project Id
		profile: '', // Profile ID
		application: '', // Application id?
	});



	useEffect(() => {
		setMainTabs({
			...mainTabs,
			selectedMainTab: mainTabs.projectAdminTabs[0]
		})
		data && setProjectData({ project: data.projectById })
	}, [data]);
	

	const submitSetStatus = async (status, statusObject) => {
		if (status === 'ACCEPTED') {
			await acceptProjectApplicant({
				variables: {
					data: {
						...projectApplicantState,
					},
				},
			});
		}
		// if (status === 'DECLINED') {
		// 	await declineProjectApplicant({
		// 		variables: {
		// 			data: {
		// 				...projectApplicantState,
		// 				project: project.id,
		// 				profile: person.profile.id,
		// 				application: person.id,
		// 			},
		// 		},
		// 	});
		// }
		setProjectApplicantState({ project: '', profile: '', application: '' });
	};




	if (loading) return <LoadingSpinner />;
	if (error) return <h3>Error</h3>;



	const projectAdminMainView = selectedTabView => {

		let viewSelected = "";

		if (selectedTabView === mainTabs.projectAdminTabs[0]) {  // Applicants
			const view = (
				<>
					
					{project.applicants.length === 0 ? (
						<NoContent message="No Applicants" />
					) : (
						null
						// <PeopleHeader 
						// 	mainTabs={mainTabs}
						// 	selectedMainTab={mainTabs.selectedMainTab}
						// 	dashNavTabState={dashNavTabState}
						// 	possibleDashNavTabs={possibleDashNavTabs}  
						// />
					)}

					{project.applicants.map(applicant => (
						<section className="list applicants" key={applicant.profile.id + Date.now()}>
							<People
								person={applicant}
								mainTabs={mainTabs}
								selectedMainTab={mainTabs.selectedMainTab}
								project={project}
								dashNavTabState={dashNavTabState}
								possibleDashNavTabs={possibleDashNavTabs}
								submitSetStatus={submitSetStatus}
								projectApplicantState={projectApplicantState}
							/>
						</section>
					))}
				</>
			)
			return viewSelected = view
		}

		if (selectedTabView === mainTabs.projectAdminTabs[1]) {  // Students
			const view = (
				<>
					{project.students.length === 0 ? (
						<NoContent message="No Students" />
					) : (
						null
						// <PeopleHeader 
						// 	mainTabs={mainTabs}
						// 	selectedMainTab={mainTabs.selectedMainTab}
						// 	dashNavTabState={dashNavTabState}
						// 	possibleDashNavTabs={possibleDashNavTabs}
						// />
					)}
					{project.students.map(student => (
						<section className="list students" key={student.profile.id + Date.now()}>
							<People
								person={student}
								mainTabs={mainTabs}
								selectedMainTab={mainTabs.selectedMainTab}
								project={project}
								dashNavTabState={dashNavTabState}
								possibleDashNavTabs={possibleDashNavTabs}
							 />
						</section>
					))}
				</>
			)
			return viewSelected = view
		}

		if (selectedTabView === mainTabs.projectAdminTabs[2]) {  // Trade Masters
			const view = (
				<>
					{project.tradeMasters.length === 0 ? (
						<NoContent message="No Trade Masters" />
					) : (
						null
						// <PeopleHeader 
						// 	mainTabs={mainTabs}
						// 	selectedMainTab={mainTabs.selectedMainTab}
						// 	dashNavTabState={dashNavTabState}
						// 	possibleDashNavTabs={possibleDashNavTabs}
						// />
					)}
					{project.tradeMasters.map(trademaster => (
						<section className="list trade-masters"  key={trademaster.profile.id + Date.now()} >
							<People
								person={trademaster}
								mainTabs={mainTabs}
								selectedMainTab={mainTabs.selectedMainTab}
								project={project}
								dashNavTabState={dashNavTabState}
								possibleDashNavTabs={possibleDashNavTabs}  
							/>
						</section>
					))}
				</>
			)
			return viewSelected = view
		}

		if (selectedTabView === mainTabs.projectAdminTabs[3]) {  // Trades
			const view = (
				<>
					{project.trades.length === 0 ? (
						<NoContent message="No Trades" />
					) : (
						<TradesHeader />
					)}
					{project.trades.map(trade => (
						<div className="list trades" key={trade.id + Date.now()}>
							<Trades 
								trade={trade} 
								tab={mainTabs.selectedMainTab} 
								project={project} 
								setAddTaskModal={setAddTaskModal}  
							/>
						</div>
					))}
				</>
			)
			return viewSelected = view
		}

		if (selectedTabView === mainTabs.projectAdminTabs[4]) {   // Analytics
			const view = (
				<div className="analytics">
					<Analytics
						tab={mainTabs.selectedMainTab}
						project={project} 
					/>
				</div>
			)
			return viewSelected = view
		}

		return (
			<>
				{viewSelected}
			</>
		)
	}

	if (!mainTabs) {
		return (
			<LoadingSpinner />
		)
	}

	return (
		<section className="dashboard-main  section  project-admin ">
			<div className="dashboard-section-inner-container" >
				
				<div className="dashboard-title">
					<div className="tabs">
						{mainTabs ?
							mainTabs.projectAdminTabs.map(tab => (
								<Tab
									mainTabs={mainTabs}
									setMainTabs={setMainTabs}
									tab={tab}
									key={tab + Date.now()}
								/>
							)
						) : (
							<>
								<Skeleton count={1} height={25} width={200} />
								<Skeleton count={1} height={25} width={200} />
								<Skeleton count={1} height={25} width={200} />
								<Skeleton count={1} height={25} width={200} />
							</>
						)}
					</div>
				</div>

				<hr />
				<div className="dashboard-main-body">
					{projectAdminMainView(mainTabs.selectedMainTab)}
				</div>

			</div>
		</section>
	);
};

export default MainProjectAdmin;

