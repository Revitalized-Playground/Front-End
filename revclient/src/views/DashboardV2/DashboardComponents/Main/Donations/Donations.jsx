import React from 'react';

import Donation from "./Donation";


const Donations = props => {

    // console.log("Props in donations  ", props.donations);

    return (
        <section className="donation-card section">
            <h3>Donations you have made</h3>
            {props.donations && props.donations.map( donation => (
                <Donation donation={donation} key={donation.id+Math.random()}/>
            ))}
        </section>
    );
}


export default Donations

