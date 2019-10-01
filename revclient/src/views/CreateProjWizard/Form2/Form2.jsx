import React, { useState } from 'react'
// import states from '../../../assets/CreateProjWizard/stateList'
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
            <h2>Owner Name</h2>
            <input
                required
                name="projOwnerName"
                type="text"
                className="name"
                placeholder="Alpha Wolf Squadron"
                value={projOwnerName}
                onChange={e => handleChanges(e)}
            />
            <h2>Street Address</h2>
            <input
                required
                name="projAddress"
                type="text"
                className="proj-street-address"
                value={projAddress}
                onChange={e => handleChanges(e)}
            />

            <div className="address-details">
                <div className="address-details-city">
                    <h2>City</h2>
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
                    <h2>State</h2>
                    {/* <select
                        required
                        onChange={e => handleChanges(e)}
                        name="state"
                    >
                        {states.map(eachState => <option>{eachState}</option>)}
                    </select> */}
                    <input
                        required
                        name="state"
                        type="text"
                        value={state}
                        onChange={e => handleChanges(e)}
                    />
                </div>
            </div>
            <div className='address-details-zip'>
                <h2>Zip Code</h2>
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
                <button type="submit" className="next-step">Next &rarr;</button>
                <button className="prev-step" onClick={() => setFormPosition(1)}>&larr; Previous</button>
            </div>
        </form >
    );
};

export default Form2;
