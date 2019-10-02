import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import states from '../../../assets/CreateProjWizard/stateList';



const Form2 = ({ projOwnerName, projAddress, city, state, zip, handleChanges, setFormPosition }) => {
    const [err, setErr] = useState(true)

    const checker = (e) => {
        if (e.target.value.length === 5 || e.target.value.length === 0) {
            setErr(true)
        } else {
            setErr(false)
        }
    }

    const checker2 = (e) => {
        if (e.target.value.length === 5 || e.target.value.length === 0) {
            setErr(true)
        }
    }

    return (
        <form onSubmit={() => setFormPosition(3)} className="form-2" >
            {/* <h4>Owner Name</h4>
            <input
                // required
                name="projOwnerName"
                type="text"
                className="name"
                placeholder="Name"
                // value={projOwnerName}
                onChange={e => handleChanges(e)}
            /> */}
            <h4>Street Address</h4>
            <input
                required
                name="address"
                type="text"
                className="proj-street-address"
                value={projAddress}
                onChange={e => handleChanges(e)}
            />

            <div className="address-details">
                <div className="address-details-city">
                    <h4>City</h4>
                    <input
                        required
                        name="city"
                        type="text"
                        className="proj-city"
                        value={city}
                        onChange={e => handleChanges(e)}
                    />
                </div>

                <div className='address-details-state'>
                    <h4>State</h4>
                    <select
                        required
                        onChange={event => handleChanges(event)}
                        name="state"
                    >
                        {states.map(eachState => <option>{eachState}</option>)}
                    </select>
                    {/* <input
                        required
                        name="state"
                        type="text"
                        value={state}
                        onChange={e => handleChanges(e)}
                    /> */}
                </div>
            </div>
            <div className='address-details-zip'>
                <h4>Zip Code</h4>
                <input
                    required
                    min='10000'
                    name="zip"
                    type="number"
                    className="proj-zip"
                    value={zip === 0 ? '' : zip}
                    onChange={e => { handleChanges(e); checker2(e) }}
                    onBlur={(e) => checker(e)}
                />
                {!err && <p className='errorText'>Wrong Zip Number</p>}
            </div>
            <div className="form-navigation">
                <button type="submit" className="next-step">Next&nbsp;<FaArrowRight /></button>
                <button className="prev-step" onClick={() => setFormPosition(1)}><FaArrowLeft />&nbsp;Previous</button>
            </div>
        </form >
    );
};

export default Form2;
