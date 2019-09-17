import React, {useState} from 'react'
import states from '../../../assets/CreateProjWizard/stateList'
const Form2 = ({ projOwnerName, projAddress, city, state, zip, handleChanges, setFormPosition }) => {
    const [err, setErr] = useState(true)

    const checker = (e) => {
        if(e.target.value.length === 5 || e.target.value.length === 0) {
            setErr(true)
        } else {
            setErr(false)
        }
    }
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
                name="projAddress"
                type="text"
                className="proj-street-address"
                value={projAddress}
                onChange={e => handleChanges(e)}
            />

            <div className="address-details">
                <div>
                    <h2>Project City</h2>
                    <input
                        required
                        name="city"
                        type="text"
                        className="proj-city"
                        value={city}
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
                        {states.map(eachState => <option>{eachState}</option>)}
                    </select>

                </div>
                <div>
                    <h2>Project Zip Code</h2>
                    <input
                        required
                        name="zip"
                        type="number"
                        className="proj-zip"
                        value={zip === 0 ? '' : zip}
                        onChange={e => {handleChanges(e); checker(e)}}
                    />
                    {!err && <p>Wrong Zip Number</p>}

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