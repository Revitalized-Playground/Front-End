import React from 'react';
import LoadingSpinner from "../../../../components/LoadingSpinner/LoadingSpinner";

import Donations from "./Donations/Donations";

const MainDonor = props => {
	const { donations, mainTabs } = props;

	if (!mainTabs) {
		return (
			<LoadingSpinner />
		)
	}

	return (
		<section className="dashboard-main section  donor ">
			<div className="dashboard-section-inner-container" >

				<div className="dashboard-title">
					<div className="tabs"></div> 
				</div>

				<div className="dashboard-main-body">
					<Donations donations={donations} />
				</div>

			</div>
		</section>
	);
};

export default MainDonor;
