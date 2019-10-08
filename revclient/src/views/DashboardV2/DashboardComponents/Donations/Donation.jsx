import React from 'react';
import { formatMoney } from "../../../../helpers/helpers";


const Donation = props => {
    console.log("Props in donation  ", props)

    return (
        
            <h5>${formatMoney(props.donation.amount)}</h5>

    );
}


export default Donation

