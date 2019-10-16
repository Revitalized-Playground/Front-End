import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
// import { inLastWeek } from "../../../../helpers/helpers";

// import Tabs from './TabComponent/Tabs';
import Tab from './TabComponent/Tab';
import Task from "./TasksComponent/Task";
import People from "./People/People";
import PeopleHeader from "./People/PeopleHeader";
import Trades from "./Trades/Trades";
import TradesHeader from "./Trades/TradesHeader";
import Metrics from "./Metrics/Metrics";

// import { apprenticeTabs, apprenticeList } from '../../dashboarddummydata';

const MainProjectAdmin = props => {
	const { project, mainTabs, setMainTabs } = props;

	useEffect(() => {
		setMainTabs({
			...mainTabs,
			selectedMainTab: mainTabs.projectAdminTabs[0]
		})
	}, []);

	const changeSelected = userSelectedTab => {
		setMainTabs({
			...mainTabs,
			selectedMainTab: userSelectedTab,
		});
	};

	const projectAdminMainView = selectedTabView => {
		
		let viewSelected="";

		if (selectedTabView === mainTabs.projectAdminTabs[0]) {  // Applicants
			const view = (
				<>
					<PeopleHeader />
					{project.applicants.map(applicant => (
						<section className="list applicants" key={applicant.profile.id + Date.now()}>
							<People person={applicant} mainTabs={mainTabs} selectedMainTab={mainTabs.selectedMainTab}  />
						</section>
					))}
				</>
			)
			return viewSelected = view
		}
		
		if (selectedTabView === mainTabs.projectAdminTabs[1]) {  // Students
			const view = (
				<>
					<PeopleHeader />
					{project.students.map(student => (
						<section className="list students" key={student.profile.id + Date.now()}>
							<People person={student} mainTabs={mainTabs} selectedMainTab={mainTabs.selectedMainTab}  />
						</section>
					))}
				</>
			)
			return viewSelected = view
		}

		if (selectedTabView === mainTabs.projectAdminTabs[2]) {  // Trade Masters
			const view = (
				<>
					<PeopleHeader />
					{project.tradeMasters.map(trademaster => (
						<section className="list trade-masters"  key={trademaster.profile.id + Date.now()} >
							<People person={trademaster} mainTabs={mainTabs} selectedMainTab={mainTabs.selectedMainTab}  />
						</section>
					))}
				</>
			)
			return viewSelected = view
		}

		if (selectedTabView === mainTabs.projectAdminTabs[3]) {  // Trades
			const view = (
				<>
					<TradesHeader />
					{project.trades.map(trade => (
						<div className="list trades" key={trade.id + Date.now()}>
							<Trades trade={trade} tab={mainTabs.selectedMainTab} project={project}  />
						</div>
					))}
				</>
			)
			return viewSelected = view
		}

		if (selectedTabView === mainTabs.projectAdminTabs[4]) {   // Metrics
			const view = (
				<div className="metrics">
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
					mainTabs.projectAdminTabs.map(tab => (
						<Tab changeSelected={changeSelected} selected={mainTabs.selectedMainTab} tab={tab} key={tab + Date.now()} />
					)
				) : (
					<>
						<Skeleton count={1} height={25} width={200} />
						<Skeleton count={1} height={25} width={200} />
						<Skeleton count={1} height={25} width={200} />
						<Skeleton count={1} height={25} width={200} />
					</>
				)}
				</div> 
			</div>

			<hr />
			<div className="dashboard-main-body">
				{/* {<List list={state.list.filter(item => item.tab === state.selected)} /> || (
					<Skeleton count={5} height={125} />
				)} */}
				{projectAdminMainView(mainTabs.selectedMainTab)}
			</div>
		</div>
	);
};

export default MainProjectAdmin;
