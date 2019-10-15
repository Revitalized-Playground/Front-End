import React from 'react';
import { formatMoney } from "../../../../../helpers/helpers";
import ProgressBar from "../../../../../components/ProgressBar/ProgressBar";
import { calculateDueDate } from "../../../../../helpers/helpers";

const Donation = props => {

    const fakeProps = {
        donation: {
            id: "",
            amount: "",
            project: {
                name: "Revitalize Chicago",
                description: "The most famous theatre in all of Chicago is getting an overhaul by Revitalize",
                goalAmount: 1383.00,
                duration: 2,
                startDate: "2019-10-03T00:00:00.000Z"
            }
        }
    }
    

    return (
            <div className="dashboard-donation-container" key={props.donation.id + Date.now()}>

                <div className="donation-details">
                    <h3>{fakeProps.donation.project.name}</h3>
                    <p className="donation-details-completion">Completion Date: {calculateDueDate(fakeProps.donation.project.startDate, fakeProps.donation.project.duration)}</p>
                    <p>{fakeProps.donation.project.description}</p>
                </div>
                <div className="donation-progress">
                    <ProgressBar progress={props.donation.amount} startingPoint={fakeProps.donation.project.goalAmount} />
                </div>
                <div className="donation-amount">
                    <h5>${formatMoney(props.donation.amount)}</h5>

                </div>
                
            </div>

    );
}

export default Donation;
