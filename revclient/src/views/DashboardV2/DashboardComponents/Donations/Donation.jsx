import React from 'react';
import { formatMoney } from "../../../../helpers/helpers";


const Donation = props => {
    console.log("Props in donation  ", props);

    

    return (
        
            


            <div className="dashboard-donation-container" key={props.donation.id + Date.now()}>

                <div className="donation-details">

                </div>
                <div className="donation-amount">
                    <h5>${formatMoney(props.donation.amount)}</h5>

                </div>

                {/* <div className="item-activity-container">
                    
                    <div className="item-activity-category">{props.item.left}</div>
                    
                    <div className="item-activity-body">
                        
                        {props.item.image ? (
                            <div className="item-activity-img-container">
                                <img src={props.item.image} alt="" />
                            </div>
                        ) : (
                            <div className="display-none"></div>
                        )}

                        <div className="text">
                            <h5>{props.item.name}</h5>
                            <p className="description">{props.item.description}</p>
                            <p className="comment">{props.item.comment}</p>
                        </div>
                    
                        <div className="item-activity-date">
                            <p>{props.item.right}</p>
                        </div>						
                    </div>

                </div> */}
            </div>

    );
}


export default Donation

