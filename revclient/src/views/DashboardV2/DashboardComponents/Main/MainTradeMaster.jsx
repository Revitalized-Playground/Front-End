import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
// import { inLastWeek } from "../../../../helpers/helpers";

import Tab from './TabComponent/Tab';
import Task from "./TasksComponent/Task";
import People from './People/People';
import PeopleHeader from "./People/PeopleHeader";
import Trades from "./Trades/Trades";
import Metrics from "./Metrics/Metrics";


const MainTradeMaster = props => {
	const { project, mainTabs, setMainTabs } = props;

	useEffect(() => {
		setMainTabs({
			...mainTabs,
			selectedMainTab: mainTabs.tradeMasterTabs[0]
		})
	}, []);

	const changeSelected = userSelectedTab => {
		setMainTabs({
			...mainTabs,
			selectedMainTab: userSelectedTab,
		});
	};

	const tradeMasterView = selectedTabView => {
		console.log("tradeMasterView function ", props);
		let viewSelected="";

		if (selectedTabView === mainTabs.tradeMasterTabs[0]) {
			const view = (
				<>
					<PeopleHeader />
					{project.tradeMasterProjects.map(student => (
						<div className="list students">
							<People person={student} tab={mainTabs.selectedMainTab} />
						</div>
					))}
				</>
			)
			return viewSelected = view
		}

		if (selectedTabView === mainTabs.tradeMasterTabs[1]) {
			const view = project.tradeMasterProjects.project.trades.map(trade => (
					<div className="list trades">
						<Trades trade={trade} tab={mainTabs.selectedMainTab} />
					</div>
				) 
			)
			return viewSelected = view
		}


		if (selectedTabView === mainTabs.tradeMasterTabs[2]) {
			const view = project.tradeMasterProjects.project.tasks.map(task => (
					<div className="list tasks">
						<Task task={task} tab={mainTabs.selectedMainTab} />
					</div>
				) 
			)
			return viewSelected = view
		}


		if (selectedTabView === mainTabs.tradeMasterTabs[3]) {
			const view = (
				<div className="list metrics">
					<Metrics tab={mainTabs.selectedMainTab} />
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
				{tradeMasterView()}
			</div>
		</div>
	);
};

export default MainTradeMaster;
