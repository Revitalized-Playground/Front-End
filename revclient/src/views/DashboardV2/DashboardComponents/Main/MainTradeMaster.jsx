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
	const [selected, setSelected] = useState("Students");

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
		let viewSelected="";
		if (selected === mainTabs.tradeMasterTabs[0]) {
			const view = (
				<>
					{
						project.applicants.lengthx === 0
						?
							<p>No applicants</p>
						:
							<PeopleHeader />
						}
						{/* {project.applicants.map(applicant => (
						<div className="list students">
							<People person={applicant} tab={mainTabs.selectedMainTab} />
						</div> */}
						<p>WIP</p>
					{/* ))}
					} */}
					
				</>
			)
			return viewSelected = view
		};

		if (selected === mainTabs.tradeMasterTabs[1]) {
			const view = (
				<>
					{
						project.students.length === 0
						? 
							<p>No students</p>
						:
							<PeopleHeader />}
							{project.students.map(student => (
								<div className="list students">
									<People person={student} tab={mainTabs.selectedMainTab} />
								</div>
							))}
					}
				</>
			)
			return viewSelected = view
		}

		if (selected === mainTabs.tradeMasterTabs[2]) {

			const view = (
				<>
				{
					project.trades.length === 0
						?
							<p>No trades</p>
						: 
							project.trades.map(trade => (
								<div className="list trades">
								<Trades trade={trade} tab={mainTabs.selectedMainTab} />
							</div>
							))
				}
				</>
			)
		
			return viewSelected = view
		}

		if (selected === mainTabs.tradeMasterTabs[3]) {
			const view = (
				<>
					{project.tasks.length ===  0
						?
							<p>No tasks</p>
						:
						project.tasks.map(task => (
								<div className="list tasks">
									<Task task={task} tab={mainTabs.selectedMainTab} />
								</div>
							))
					}
				</>
			)
		
			return viewSelected = view
		}
		if (selected === mainTabs.tradeMasterTabs[4]) {
			const view = (
				<>
					<div className="list metrics">
						<Metrics tab={mainTabs.selectedMainTab} />
					</div>
				</>
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
							<Tab
								setSelected={setSelected}
								selected={selected}
								tab={tab}
								key={tab + Date.now()}
							/>
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
