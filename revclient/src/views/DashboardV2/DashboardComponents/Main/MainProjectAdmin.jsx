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
import ProjectTrades from './Trades/Trades';

// import { apprenticeTabs, apprenticeList } from '../../dashboarddummydata';

const MainProjectAdmin = props => {
	const { project, mainTabs, setMainTabs } = props;
	const [selected, setSelected] = useState("Students");
	console.log("project: ", project);
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

		if (selected === mainTabs.projectAdminTabs[0]) {
			const view = (
				<>
					{
						project.students.length === 0 
						? 
							<p>No students</p>
						:
							<PeopleHeader />
						}
						{project.students.map(student => (
							<section className="list students" key={student.profile.id + Date.now()}>
								<People person={student} tab={mainTabs.selectedMainTab} />
							</section>	
						))}
				</>
			)
			return viewSelected = view
		}
		
		if (selected === mainTabs.projectAdminTabs[1]) {
			console.log("project.tradeMasters: ", project.tradeMasters);
			const view = (
				<>
					{
						project.tradeMasters.length === 0 
						?
							<p>No trade masters</p>
						:
							<PeopleHeader />
					}
					{project.tradeMasters.map(trademaster => (
						<section className="list trademasters" key={trademaster.profile.id + Date.now()}>
							<People person={trademaster} tab={mainTabs.selectedMainTab} />
						</section>
					))}
				</>
			)
			return viewSelected = view
		}

		if (selected === mainTabs.projectAdminTabs[2]) {
			const view = (
				<>
					{
						project.trades.length === 0 
						?
							<p>No trades</p>
						:
							<TradesHeader />
					}
					{project.trades.map(trade => (
						<section className="list trades"  key={trade.id + Date.now()}>
							<Trades trade={trade} tab={mainTabs.selectedMainTab} project={project} />
						</section>
					))}
				</>
			)
			return viewSelected = view
		}

		if (selected === mainTabs.projectAdminTabs[3]) {
			const view = (
				<>
					{
						project.tasks.length === 0 
						?
							<p>No tasks</p>
						:
							project.tasks.map(task => (
								<div className="list tasks" >
									<Task task={task} tab={mainTabs.selectedMainTab} />
								</div>
							))
					}
				</>
			)
			return viewSelected = view
		}

		if (selected === mainTabs.projectAdminTabs[4]) {
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
						<Tab
							setSelected={setSelected}
							selected={selected}
							tab={tab}
							key={tab + Date.now()}
						/>
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
				{projectAdminMainView()}
			</div>
		</div>
	);
};

export default MainProjectAdmin;
