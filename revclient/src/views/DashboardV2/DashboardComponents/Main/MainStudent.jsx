import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
// import { inLastWeek } from "../../../../helpers/helpers";

import Tabs from './TabComponent/Tabs';
import Task from "./TasksComponent/Task";

// import { apprenticeTabs, apprenticeList } from '../../dashboarddummydata';

const MainStudent = props => {


	const [state, setState] = useState({
		project: "",
		selected: "",
		tabs: "",
	});

	useEffect(() => {
		setState({
			project: props.project,
			selected: props.defaultTab,
			tabs: props.tabs,
		})
	}, [])

	const changeSelected = userSelectedTab => {
		setState({
			...state,
			selected: userSelectedTab,
		});
	};

	const tradeMasterView = () => {
		const newTasksArray = state.project.students.map(task => (
			<React.Fragment key={task+Math.random()}>
				<div className="list">
					<Task task={task} tab={state.selected} />
				</div>
			</React.Fragment>
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
				{tradeMasterView()}
			</div>
		</div>
	);
};

export default MainStudent;
