import React from 'react';

import Donation from "./Donation";


const Donations = props => {
console.log("Props in donations  ", props.me.donations)
    return (
        <section className="donation-card-container">
            {props.me.donations && props.me.donations.map( donation => (
                <Donation donation={donation} key={donation.id+Math.random()}/>
            ))}
        </section>
    );
}


export default Donations

