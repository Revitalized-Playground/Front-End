import React from 'react';
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";
// import { inLastWeek } from "../../../../helpers/helpers";

// import Tab from './TabComponent/Tab';
import Donations from "./Donations/Donations";
// import NoContent from "./NoContent/NoContent";


// import { apprenticeTabs, apprenticeList } from '../../dashboarddummydata';

const MainDonor = props => {
	const { donations, mainTabs } = props;
	// Moving away from managing any tab information anywhere other than in dashboard.
	
	// useEffect(() => {
	// 	setMainTabs({
	// 		...mainTabs,
	// 		selectedMainTab: mainTabs.donationTabs[0]
	// 	})
	// }, []);

	// const projectAdminMainView = selectedTabView => {
		
	// 	let viewSelected="";

	// 	if (selectedTabView === mainTabs.donationTabs[0]) {
	// 		const view = (
	// 			<>
	// 				<Donations donations={donations} />
	// 			</>
	// 		)
	// 		return viewSelected = view
	// 	}
		
	// 	// if (selectedTabView === mainTabs.donationTabs[1]) {
	// 	// 	const view = (
	// 	// 		<>
	// 	// 			<Donations donations={donations} />
	// 	// 		</>
	// 	// 	)
	// 	// 	return viewSelected = view
	// 	// }

	// 	return (
	// 		<>
	// 			<Donations donations={donations} />
	// 		</>
	// 	)
	// }

	if (!mainTabs) {
		return (
			<LoadingSpinner />
		)
	}

	return (
		<section className="dashboard-main section  donor ">
			<div className="dashboard-section-inner-container" >

				<div className="dashboard-title">
					<div className="tabs">
						{/* {mainTabs ? 
							// mainTabs.donationTabs.map(tab => (
							// 	<Tab
							// 		mainTabs={mainTabs}
							// 		setMainTabs={setMainTabs}
							// 		tab={tab}
							// 		key={tab + Date.now()}
							// 	/>
							// ))
							null
						 : (
							<>
								<Skeleton count={1} height={25} width={200} />
							</>
						)} */}
					</div> 
				</div>

				{/* <hr /> */}

				<div className="dashboard-main-body">
					<Donations donations={donations} />
				</div>

			</div>
		</section>
	);
};

export default MainDonor;
