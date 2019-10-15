import React from 'react';
import { calculateDueDate, formatMoney, addUpDonations } from "../../../../../helpers/helpers";
import ProgressBar from "../../../../../components/ProgressBar/ProgressBar";


const Donation = props => {
    const { donation } = props;

    return (
            <div className="dashboard-donation-container" key={props.donation.id + Date.now()}>

                <div className="donation-details">
                    <h3>{donation.project.name}</h3>
                    <p className="donation-details-completion">Completion Date: {calculateDueDate(donation.project.startDate, donation.project.duration)}</p>
                    <p>{donation.project.description}</p>
                </div>
                <div className="donation-progress">
                    <ProgressBar progress={addUpDonations(donation.project.donations)} startingPoint={donation.project.goalAmount} />
                </div>
                <div className="donation-amount">
                    <h3>${formatMoney(donation.amount)}</h3>
                    <i>(${formatMoney(donation.project.goalAmount)})</i>
                </div>
                
            </div>

    );
}

export default Donation;
