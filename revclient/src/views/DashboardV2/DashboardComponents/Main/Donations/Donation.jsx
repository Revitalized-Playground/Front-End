import React from 'react';
import { Link } from "react-router-dom";
import { calculateDueDate, formatMoney, addUpDonations, formatDate } from "../../../../../helpers/helpers";
import ProgressBar from "../../../../../components/ProgressBar/ProgressBar";
import { FaLink } from "react-icons/fa";


const Donation = props => {
    const { donation } = props;

    // console.log("Donation props ", donation);

    return (
            <section className="dashboard-donation-container" key={props.donation.id + Date.now()}>

                <section className="donation-image-section" >
                    <div className="donation-image-container" >
                        <img src={donation.project.featuredImage} alt={donation.project.name} />
                    </div>
                </section>

                <div className="donation-details">
                    <div className="donation-details-header" >
                        <Link to={`/project/${donation.project.slug}`}>
                            <h3>{donation.project.name}</h3>
                            &nbsp;<FaLink />
                        </Link>
                        <div className="donation-details-completion">
                            <p>
                                Completion Date: {calculateDueDate(donation.project.startDate, donation.project.duration)}
                            </p> 
                        </div>
                    </div>

                    <p>{donation.project.description}</p>

                    <hr/>

                    <div className="donation-progress">
                        <ProgressBar progress={addUpDonations(donation.project.donations)} startingPoint={donation.project.goalAmount} />
                        <div className="donation-progress-total">
                            Total donations:
                            {donation.project.donations.length}
                        </div>
                        <div className="donation-progress-total">
                            Goal amount:
                            ${formatMoney(donation.project.goalAmount)}
                        </div>
                    </div>

                </div>

                
                
                <div className="donation-amount">
                    <h3>${formatMoney(donation.amount)}</h3>
                    <i>On {formatDate(donation.createdAt)}</i>
                </div>
                
            </section>

    );
}

export default Donation;
