import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';
// import { inLastWeek } from "../../../../helpers/helpers";

import Tabs from './TabComponent/Tabs';
// import List from './TabComponent/List';
// import Tasks from "./TasksComponent/Tasks";
import Task from "./TasksComponent/Task";

const Main = props => {
	const tabs = ['New Tasks', 'Tasks In Progress', 'Completed Tasks', 'Activity Feed'];
	const [state, setState] = useState({
		selected: props.defaultTab,
		list: props.list,
		project: props.project,
	});

	const changeSelected = tab => {
		setState({
			...state,
			selected: tab,
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

	return (
		<div className="dashboard-main section">
			<div className="dashboard-title">
				{<Tabs tabs={tabs} selected={state.selected} changeSelected={changeSelected} /> || (
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

export default Main;
