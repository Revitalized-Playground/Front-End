import React from 'react';
import { Link } from "react-router-dom";
import { calculateDueDate, formatMoney, addUpDonations } from "../../../../../helpers/helpers";
import ProgressBar from "../../../../../components/ProgressBar/ProgressBar";
import { FaLink } from "react-icons/fa";
import ReadMoreReact from "read-more-react";


const Donation = props => {
    const { donation } = props;

    return (
            <section className="dashboard-donation-container" key={props.donation.id + Date.now()}  style={{backgroundImage:`url(${donation.project.featuredImage})`}}  >
                <div className="donation-container-overlay" >

                    <div className="donation-completion">
                        <p>
                            Completion Date: {calculateDueDate(donation.project.startDate, donation.project.duration)}
                        </p> 
                    </div>
                    <div className="donation-details">
                        <div className="donation-details-body">
                            <div className="donation-details-header" >
                                <Link to={`/project/${donation.project.slug}`}>
                                    <div className="donation-title">{donation.project.name}</div>
                                    &nbsp;<FaLink />
                                </Link>
                            </div>

                            <ReadMoreReact 
                                text={donation.project.description}
                                min={80}
                                ideal={100}
                                max={200}
                                readMoreText="..."
                            />
                            
                            <div className="donation-progress">
                                <ProgressBar progress={addUpDonations(donation.project.donations)} startingPoint={donation.project.goalAmount} />
                                <div className="donation-progress-total">
                                    Goal amount:
                                    ${formatMoney(donation.project.goalAmount)}
                                </div>
                            </div>    
                        </div>

                        <div className="donation-amount">
                            <div className="amount">${formatMoney(donation.amount)}</div>
                        </div>

                    </div>

                </div>
            </section>

    );
}

export default Donation;
