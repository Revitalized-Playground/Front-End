import React from 'react';

import Donation from "./Donation";


const Donations = props => {
console.log("Props in donations  ", props.me.donations)
    return (
        <section className="dashboard-donation-card section">
            <h3>Donations you have made</h3>
            {props.me.donations && props.me.donations.map( donation => (
                <Donation donation={donation} key={donation.id+Math.random()}/>
            ))}
        </section>
    );
}


export default Donations

