import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";

import Tab from './TabComponent/Tab';
import Task from "./TasksComponent/Task";
import People from "./People/People";
import PeopleHeader from "./People/PeopleHeader";

// import { apprenticeTabs, apprenticeList } from '../../dashboarddummydata';

const MainStudent = props => {
	const { project, mainTabs, setMainTabs } = props;

	useEffect(() => {
		setMainTabs({
			...mainTabs,
			selectedMainTab: mainTabs.studentTabs[0]
		})
	}, []);

	const changeSelected = userSelectedTab => {
		setMainTabs({
			...mainTabs,
			selectedMainTab: userSelectedTab,
		});
	};

	const studentMainView = selectedTabView => {
		
		console.log("studentMainView function ", props);
		let viewSelected="";

		if (selectedTabView === mainTabs.studentTabs[0]) {
			const view = (
				<>
					<PeopleHeader />
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
			const view = project.tradeMasters.map(trademasters => (
					<div className="list">
						{/* <Task task={task} tab={mainTabs.selectedMainTab} /> */}
					</div>
				) 
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
							<Tab changeSelected={changeSelected} selected={mainTabs.selectedMainTab} tab={tab} key={tab + Date.now()} />
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
				{studentMainView()}
			</div>
		</div>
	);
};

export default MainStudent;
