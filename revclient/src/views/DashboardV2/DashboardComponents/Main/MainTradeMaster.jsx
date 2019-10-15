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
	// console.log("project: ", project);
	// console.log("project.students top: ", project.students);
	const [selected, setSelected] = useState("Tasks");

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
		// console.log("tradeMasterView function ", props);
		let viewSelected="";
		if (selected === mainTabs.tradeMasterTabs[0]) {
			const view = (
				<>
					{/* <PeopleHeader />
					{project.applicants.map(applicant => (
						<div className="list students">
							<People person={applicant} tab={mainTabs.selectedMainTab} />
						</div>
					))} */}
				</>
			)
			return viewSelected = view
		}
		console.log("selectedTabView: ", selectedTabView);
		// console.log("mainTabs: ", mainTabs);
		// console.log("mainTabs.tradeMasterTabs: ", mainTabs.tradeMasterTabs);
		if (selected === mainTabs.tradeMasterTabs[1]) {

			// console.log("project.students inside if: ", project.students);
			const view = (
				<>
					<PeopleHeader />
					{/* {console.log("project.tradeMasterProjects :", project.tradeMasterProjects)} */}
					{project.students.map(student => (
						<div className="list students">
							{/* {console.log("student: ", student)} */}
							<People person={student} tab={mainTabs.selectedMainTab} />
						</div>
					))}
				</>
			)
			// console.log("viewSelected: ", viewSelected);
			return viewSelected = view
		}


		if (selected === mainTabs.tradeMasterTabs[2]) {

			// )
			const view = project.trades.map(trade => (
				<div className="list trades">
					<Trades trade={trade} tab={mainTabs.selectedMainTab} />
				</div>
			) 
		)
			// console.log("viewSelected: ", viewSelected);			
			return viewSelected = view
		}


		if (selected === mainTabs.tradeMasterTabs[3]) {
			const view = project.tasks.map(task => (
				<div className="list tasks">
					<Task task={task} tab={mainTabs.selectedMainTab} />
				</div>
			) 
		)
			return viewSelected = view
		}
		if (selected === mainTabs.tradeMasterTabs[4]) {
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
							<Tab
								// changeSelected={changeSelected}
								setSelected={setSelected}
								// selected={mainTabs.selectedMainTab}
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
				{
					// mainTabs.tradeMasterTabs.map(t => {
					// 	return tradeMasterView(t)
					// }) 
					// tradeMasterView("Applicants")
					tradeMasterView()
					// tradeMasterView("Trades"),
					// tradeMasterView("Tasks")
					// tradeMasterView("Metrics")
				}
			</div>
		</div>
	);
};

export default MainTradeMaster;
