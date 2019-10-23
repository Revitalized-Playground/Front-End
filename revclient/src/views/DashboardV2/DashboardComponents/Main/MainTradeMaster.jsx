import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
// import { inLastWeek } from "../../../../helpers/helpers";

// Components
import Tab from './TabComponent/Tab';
import Task from "./TasksComponent/Task";
import People from './People/People';
import PeopleHeader from "./People/PeopleHeader";
import Analytics from "./Analytics/Analytics";
import NoContent from "./NoContent/NoContent";
// import Trades from "./Trades/Trades";


const MainTradeMaster = props => {
	const { project, mainTabs, setMainTabs, dashNavTabState, possibleDashNavTabs } = props;
	// Moving away from managing any tab information anywhere other than in dashboard.

	useEffect(() => {
		setMainTabs({
			...mainTabs,
			selectedMainTab: mainTabs.tradeMasterTabs[0]
		})
	}, []);


	// console.log("MainTradeMaster props", props);

	const tradeMasterView = selectedTabView => {
		let viewSelected = "";

		console.log(props)
		if (selectedTabView === mainTabs.tradeMasterTabs[0]) {  // Applicants
			const view = (
				<>
					{project.applicants && project.applicants.length > 0 ? (
						<PeopleHeader  mainTabs={mainTabs} selectedMainTab={mainTabs.selectedMainTab} dashNavTabState={dashNavTabState} possibleDashNavTabs={possibleDashNavTabs}  />
					) : (
						<NoContent message="No Applicants" />
					)}
					{project.applicants && project.applicants.map(applicant => (
						<section className="list applicants" key={applicant.profile.id + Date.now()} >
							<People person={applicant} mainTabs={mainTabs} selectedMainTab={mainTabs.selectedMainTab}  project={project} dashNavTabState={dashNavTabState} possibleDashNavTabs={possibleDashNavTabs}  />
						</section>
					))}
				</>
			)
			return viewSelected = view
		}


		if (selectedTabView === mainTabs.tradeMasterTabs[1]) {  // Students
			const view = (
				<>
					{project.students.length === 0 ? (
						<NoContent message="No Students" />
					) : (
						<PeopleHeader  mainTabs={mainTabs} selectedMainTab={mainTabs.selectedMainTab} />
					)}
					{project.students.map(student => (
						<section className="list students" key={student.profile.id + Date.now()}>
							<People person={student} mainTabs={mainTabs} selectedMainTab={mainTabs.selectedMainTab}  project={project} />
						</section>
					))}
				</>
			)
			return viewSelected = view
		}




		if (selectedTabView === mainTabs.tradeMasterTabs[2]) {  // Tasks

			const view = (
				<>
					{project.tasks.length === 0 ? (
						<NoContent message="No Tasks" />
					) : null }
					{project.tasks.map(task => (
							<div className="list tasks">
								<Task task={task} tab={mainTabs.selectedMainTab} mainTabs={mainTabs} project={project}  />
							</div>
						))
					}
				</>
			)

			return viewSelected = view
		}


		if (selectedTabView === mainTabs.tradeMasterTabs[3]) {   // Analytics
			const view = (
				<div className="analytics">
					<Analytics tab={mainTabs.selectedMainTab} project={project} />
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
		<section className="dashboard-main section trade-master ">
			<div className="dashboard-section-inner-container" >

				<div className="dashboard-title">
					<div className="tabs">
						{mainTabs ?
							mainTabs.tradeMasterTabs.map(tab => (
								<Tab
									mainTabs={mainTabs}
									setMainTabs={setMainTabs}
									tab={tab}
									key={tab + Date.now()}
								/>
							)) :
							(
								<>
									<Skeleton count={1} height={25} width={200} />
									<Skeleton count={1} height={25} width={200} />
									<Skeleton count={1} height={25} width={200} />
									<Skeleton count={1} height={25} width={200} />
								</>
							)
						}
					</div>
				</div>

				<hr />
				<div className="dashboard-main-body">
					{tradeMasterView(mainTabs.selectedMainTab)}
				</div>

			</div>
		</section>
	);
};

export default MainTradeMaster;
