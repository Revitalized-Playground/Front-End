import React, { useState } from 'react';

import Tabs from './TabComponent/Tabs';
import List from './TabComponent/List';

const Main = props => {
	const [state, setState] = useState({
		selected: props.defaultTab,
		tabs: props.tabs,
		list: props.list,
	});

	const changeSelected = tab => {
		setState({
			...state,
			selected: tab,
		});
	};

	if(!props.selectedProjectId) return null;

	return (
		<div className="dashboard-main section">
			
			<div className="dashboard-title">
				<Tabs tabs={state.tabs} selected={state.selected} changeSelected={changeSelected} />
			</div>

			<hr />
			
			<div className="dashboard-main-body">

				<List list={state.list.filter(item => item.tab === state.selected)} />

			</div>

		</div>
	);
};

export default Main;
