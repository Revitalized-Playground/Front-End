import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
// import { inLastWeek } from "../../../../helpers/helpers";

import Tabs from './TabComponent/Tabs';
import Task from "./TasksComponent/Task";

// import { apprenticeTabs, apprenticeList } from '../../dashboarddummydata';

const MainProjectAdmin = props => {

	const [state, setState] = useState({
		project: "",
		selected: "",
		tabs: "",
	});

	useEffect(() => {
		setState({
			project: props.project,
			selected: props.defaultTab,
			tabs: props.mainTabs,
		})
	}, [])

	const changeSelected = userSelectedTab => {
		setState({
			...state,
			selected: userSelectedTab,
		});
	};

	const projectAdminMainView = () => {
		const newTasksArray = state.project.tasks.map(task => (
				<div className="list">
					<Task task={task} tab={state.selected} />
				</div>
			) 
		)
		return (
			<>
				{newTasksArray}
			</>
		)
	}


	if (!state.tabs) {
		return (
			<LoadingSpinner />
		)
	}

	return (
		<div className="dashboard-main section">
			<div className="dashboard-title">
				{<Tabs tabs={state.tabs} selected={state.selected} changeSelected={changeSelected} /> || (
					<>
						<Skeleton count={1} height={25} width={200} />
						<Skeleton count={1} height={25} width={200} />
						<Skeleton count={1} height={25} width={200} />
						<Skeleton count={1} height={25} width={200} />
					</>
				)}
			</div>

			<hr />
			<div className="dashboard-main-body">
				{/* {<List list={state.list.filter(item => item.tab === state.selected)} /> || (
					<Skeleton count={5} height={125} />
				)} */}
				{projectAdminMainView()}
			</div>
		</div>
	);
};

export default MainProjectAdmin;
