import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";

import Tab from './TabComponent/Tab';
import Task from "./TasksComponent/Task";
import People from "./People/People";
import PeopleHeader from "./People/PeopleHeader";
import NoContent from "./NoContent/NoContent";

// import { apprenticeTabs, apprenticeList } from '../../dashboarddummydata';

const MainStudent = props => {
	const { project, mainTabs, setMainTabs } = props;
	// Moving away from managing any tab information anywhere other than in dashboard.
	
	useEffect(() => {
		setMainTabs({
			...mainTabs,
			selectedMainTab: mainTabs.studentTabs[0]
		})
	}, []);


	

	const studentMainView = selectedTabView => {
		
		console.log("studentMainView function ", props);
		let viewSelected="";

		if (selectedTabView === mainTabs.studentTabs[0]) {
			const view = (
				<>
					{
						project.students.length === 0 
						? 
							<NoContent message="No Applicants" />
						:
							<PeopleHeader />
					}
					{project.students.map(student => (
						<div className="list">
							<People person={student} tab={mainTabs.selectedMainTab} />
						</div>
					))}
				</>
			)
			return viewSelected = view
		}

		
		if (selectedTabView === mainTabs.studentTabs[1]) {
			const view = (
				<>
					{
						project.tradeMasters.length === 0 
						? 
							<NoContent message="No Applicants" />
						:
							<PeopleHeader />
					}
					{project.tradeMasters.map(tradeMaster => (
						<div className="list">
							<People person={tradeMaster} tab={mainTabs.selectedMainTab} />
						</div>
					))}
				</>
			)
			return viewSelected = view
		}


		if (selectedTabView === mainTabs.studentTabs[2]) {
			const view = project.tasks.map(task => (
					<div className="list">
						<Task task={task} tab={mainTabs.selectedMainTab} />
					</div>
				) 
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
	};

	return (
		<div className="dashboard-main section">
			<div className="dashboard-title">
				<div className="tabs">
					{mainTabs ? 
						mainTabs.studentTabs.map(tab => (
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
				{studentMainView(mainTabs.selectedMainTab)}
			</div>
		</div>
	);
};

export default MainStudent;
