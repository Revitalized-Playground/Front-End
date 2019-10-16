import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
// import { inLastWeek } from "../../../../helpers/helpers";

import Tab from './TabComponent/Tab';
import Task from "./TasksComponent/Task";
import People from './People/People';
import PeopleHeader from "./People/PeopleHeader";
import Trades from "./Trades/Trades";
import Metrics from "./Metrics/Metrics";
import NoContent from "./NoContent/NoContent";


const MainTradeMaster = props => {
	const { project, mainTabs, setMainTabs } = props;
	// Moving away from managing any tab information anywhere other than in dashboard.
	
	useEffect(() => {
		setMainTabs({
			...mainTabs,
			selectedMainTab: mainTabs.tradeMasterTabs[0]
		})
	}, []);


	console.log("MainTradeMaster props", props);

	const tradeMasterView = selectedTabView => {
		let viewSelected = "";
		
		
		if (selectedTabView === mainTabs.tradeMasterTabs[0]) {  // Applicants
			const view = (
				<>
					{project.applicants.length === 0 ? ( 
						<NoContent message="No Applicants" />
					) : (
						<PeopleHeader />
					)}
					{project.applicants.map(applicant => (
						<section className="list applicants" key={applicant.profile.id + Date.now()}>
							<People person={applicant} mainTabs={mainTabs} selectedMainTab={mainTabs.selectedMainTab}  />
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
						<PeopleHeader />
					)}
					{project.students.map(student => (
						<section className="list students" key={student.profile.id + Date.now()}>
							<People person={student} mainTabs={mainTabs} selectedMainTab={mainTabs.selectedMainTab}  />
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
								<Task task={task} tab={mainTabs.selectedMainTab} />
							</div>
						))
					}
				</>
			)
		
			return viewSelected = view
		}


		if (selectedTabView === mainTabs.tradeMasterTabs[3]) {   // Metrics
			const view = (
				<div className="metrics">
					<Metrics tab={mainTabs.selectedMainTab} project={project} />
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
		<div className="dashboard-main section">
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
	);
};

export default MainTradeMaster;
