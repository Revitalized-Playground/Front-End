import React from 'react';
import { formatMoney } from '../../../../helpers/helpers';

const Donation = props => {
	console.log('Props in donation  ', props);

	return (
		<div className="donations-container">
            <div className="donation">
                

			<h5>${formatMoney(props.donation.amount)}</h5>
            </div>
		</div>
	);
};

export default Donation;
