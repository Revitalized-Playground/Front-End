import React from 'react';
import { withRouter } from 'react-router-dom';
import { formatMoney, addUpDonations, donationCount } from "../../../../helpers/helpers";
import ProgressBar from "../../../../components/ProgressBar/ProgressBar";

const Donate = props => {
    const raised = addUpDonations(props.projectData.project.donations);
    const budget = formatMoney(props.projectData.project.goalAmount);
    const budgetProgressBar = props.projectData.project.goalAmount;
    const totalDonations = donationCount(props.projectData.project.donations.length);
    const totalNumberOfDonations = props.projectData.project.donations ? totalDonations : 0;
    
    
    return (
        <div className='donateContainer'>
            <div className='donateInnerDiv'>
                <p className='donationMoney'>
                    <span className='large'>${raised}</span>
                    <span className='small'>raised out of ${budget}</span>
                </p>
                <div className='progress-bar'>
                    <ProgressBar progress={raised} startingPoint={budgetProgressBar} />
                </div>
                <p className='donatorCount'>{totalNumberOfDonations}</p>
                <p className='donorText'>{`${totalNumberOfDonations === 1 ? "Donor" : "Donors"}`}</p>
                <div className='donationButtons'>
                    {/* <Link to={`/project/donate/${match.params.id}`}> */}
                    <button className="purple" onClick={()=> props.setDonateModal(true)}>Donate now</button>
                    {/* </Link> */}
                    <button className='white' onClick={() => props.setModal(true)}>Share</button>
                </div>
                <div className="mid-line-container">
					<div className="mid-line"></div>
					<p>or</p>
					<div className="mid-line"></div>
				</div>
                <div className='apply-button'>
                    <button >Apply to Project</button>
                </div>
                <p className='lastText'>Partner with growing donors who are eager to see the transformation and economical growth of Detroit.</p>
            </div>

        </div>
    )
}

export default withRouter(Donate);
