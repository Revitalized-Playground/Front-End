import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

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
				{<List list={state.list.filter(item => item.tab === state.selected)} usertype={props.usertype} /> || (
					<Skeleton count={5} height={125} />
				)}
			</div>
		</div>
	);
};

export default Main;
