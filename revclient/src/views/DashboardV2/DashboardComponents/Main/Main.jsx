import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import Tabs from './TabComponent/Tabs';
import List from './TabComponent/List';

import { apprenticeTabs, defaultApprenticeTab, apprenticeList } from '../../dashboarddummydata';

const Main = props => {
	const [state, setState] = useState({
		// selected: props.defaultTab,
		selected: defaultApprenticeTab,
		tabs: apprenticeTabs,
		list: apprenticeList
	});

	const changeSelected = tab => {
		setState({
			...state,
			selected: tab,
		});
	};

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
				{<List list={state.list.filter(item => item.tab === state.selected)} /> || (
					<Skeleton count={5} height={125} />
				)}
			</div>
		</div>
	);
};

export default Main;
