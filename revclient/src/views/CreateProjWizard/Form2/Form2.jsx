import React from 'react'
import state from '../../../assets/CreateProjWizard/stateList'
const Form2 = ({ projOwnerName, projStreetAddress, projCity, projState, projZip, handleChanges, setFormPosition }) => {

    return (
        <form onSubmit={() => setFormPosition(3)} className="form-2" >
            <h2>Project Owner Name</h2>
            <input
                required
                name="projOwnerName"
                type="text"
                className="name"
                placeholder="Alpha Wolf Squadron"
                value={projOwnerName}
                onChange={e => handleChanges(e)}
            />
            <h2>Project Street Address</h2>
            <input
                required
                name="projStreetAddress"
                type="text"
                className="proj-street-address"
                value={projStreetAddress}
                onChange={e => handleChanges(e)}
            />

            <div className="address-details">
                <div>
                    <h2>Project City</h2>
                    <input
                        required
                        name="projCity"
                        type="text"
                        className="proj-city"
                        value={projCity}
                        onChange={e => handleChanges(e)}
                    />
                </div>

                <div>
                    <h2>Project State</h2>
                    <select
                        required
                        onChange={e => handleChanges(e)}
                        name="state"
                    >
                        {state.map(state => <option>{state}</option>)}
                    </select>

                </div>
                <div>
                    <h2>Project Zip Code</h2>
                    <input
                        required
                        name="projZip"
                        type="text"
                        className="proj-zip"
                        value={projZip}
                        onChange={e => handleChanges(e)}
                    />

                </div>
            </div>
            {/* 
            <h2>Project Difficutly</h2>
            <textarea
                required
                name="projDifficutly" S
                type="text"
                className="Difficutly"
                placeholder="Project Difficutly"
                // value={projDifficutly}
                onChange={e => handleChanges(e)}
            /> */}
            <div className="form-navigation">
                <button className="next-step">Next Step!</button>
                <button className="prev-step">Previous Step!</button>

            </div>
        </form >
    );
};

export default Form2;