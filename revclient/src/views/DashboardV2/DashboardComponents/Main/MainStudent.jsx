import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";

import Tab from './TabComponent/Tab';
import Task from "./TasksComponent/Task";
import TasksHeader from "./TasksComponent/TasksHeader";

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

		if (selectedTabView === mainTabs.studentTabs[0]) { // New Tasks
			const view = (
				<>
					{
						project.tasks.length === 0 
						? 
							<NoContent message="No Tasks" />
						:
							<TasksHeader />
					}
					{project.tasks.map(task => (
						<div className="list tasks" key={task.id + Date.now()}>
							<Task task={task} tab={mainTabs.selectedMainTab} mainTabs={mainTabs} project={project}  />
						</div>
					))}
				</>
			)
			return viewSelected = view
		}

		
		if (selectedTabView === mainTabs.studentTabs[1]) { // Tasks in progress
			const view = (
				<>
					{
						project.tasks.length === 0 
						? 
							<NoContent message="No Tasks in Progress" />
						:
							<TasksHeader />
					}
					{project.tasks.map(task => (
						<div className="list tasks" key={task.id + Date.now()}>
							<Task task={task} tab={mainTabs.selectedMainTab} mainTabs={mainTabs} project={project}  />
						</div>
					))}
				</>
			)
			return viewSelected = view
		}


		if (selectedTabView === mainTabs.studentTabs[2]) { // Completed tasks
			const view = (
				<>
					{
						project.tasks.length === 0 
						? 
							<NoContent message="No Completed Tasks" />
						:
							<TasksHeader />
					}
					{project.tasks.map(task => (
						<div className="list tasks" key={task.id + Date.now()}>
							<Task task={task} tab={mainTabs.selectedMainTab} mainTabs={mainTabs} project={project}  />
						</div>
					))}
				</>
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
		<section className="dashboard-main student section">
			<div className="dashboard-section-inner-container" >

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
		</section>
	);
};

export default MainStudent;
