import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
// import { inLastWeek } from "../../../../helpers/helpers";

import Tab from './TabComponent/Tab';
import Donations from "./Donations/Donations";
// import NoContent from "./NoContent/NoContent";


// import { apprenticeTabs, apprenticeList } from '../../dashboarddummydata';

const MainDonor = props => {
	const { donations, mainTabs, setMainTabs } = props;
	// Moving away from managing any tab information anywhere other than in dashboard.
	
	useEffect(() => {
		setMainTabs({
			...mainTabs,
			selectedMainTab: mainTabs.donationTabs[0]
		})
	}, []);

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
		<div className="dashboard-main donation section">
			<div className="dashboard-title">
				<div className="tabs">
					{mainTabs ? 
						mainTabs.donationTabs.map(tab => (
							<Tab
								mainTabs={mainTabs}
								setMainTabs={setMainTabs}
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
				{projectAdminMainView(mainTabs.selectedMainTab)}
			</div>
		</div>
	);
};

export default MainDonor;
