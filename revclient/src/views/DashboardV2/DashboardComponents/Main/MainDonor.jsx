import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
// import { inLastWeek } from "../../../../helpers/helpers";

// import Tabs from './TabComponent/Tabs';
import Tab from './TabComponent/Tab';
// import People from "./People/People";
// import PeopleHeader from "./People/PeopleHeader";
import Donations from "./Donations/Donations";


// import { apprenticeTabs, apprenticeList } from '../../dashboarddummydata';

const MainDonor = props => {
	const { donations, mainTabs, setMainTabs } = props;

	useEffect(() => {
		setMainTabs({
			...mainTabs,
			selectedMainTab: mainTabs.donationTabs[0]
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

		if (selectedTabView === mainTabs.donationTabs[0]) {
			const view = (
				<>
					<Donations donations={donations} />
				</>
			)
			return viewSelected = view
		}
		
		if (selectedTabView === mainTabs.donationTabs[1]) {
			const view = (
				<>
					<Donations donations={donations} />
					{/* {project.donations.map(donation => (
						<section className="list donations" key={donation.profile.id + Date.now()}>
							<People person={donation} tab={mainTabs.selectedMainTab} />
						</section>
					))} */}
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
					mainTabs.donationTabs.map(tab => (
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

export default MainDonor;
