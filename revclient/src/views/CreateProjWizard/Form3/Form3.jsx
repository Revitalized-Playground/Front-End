import React, { useState, 
    // useEffect 
} from 'react';
import  { FaArrowLeft } from "react-icons/fa";

import Droppy from "../../../components/PhotoUpload/Droppy";


const Form3 = ({ setProjectDetails, projectDetails, difficulty, duration, goalAmount, handleChanges, submitForm, setFormPosition, images }) => {

    const [error, 
        setError
    ] = useState(true);

    const checker = (e) => {
        e.target.value.split('.').map(each => {
            if (isNaN(each)) {
                return setError(false)
            } else {
                return setError(true)
            }
        })
    };

    return (
        <form onSubmit={(event) => submitForm(event)} className="form-3" >
            <h4>Project Duration</h4>
            <div className="duration">
                <input
                    required
                    name="duration"
                    type="number"
                    className="duration-input"
                    placeholder="Number of months"
                    value={duration}
                    onChange={e => handleChanges(e)}
                /> 
                <span>&nbsp;{duration > 1 ? "Months" : "Month"}</span>
            </div>
            <h4>Goal Amount</h4>
            <input
                required
                min='0'
                step='0.10'
                name="goalAmount"
                type="number"
                className="proj-budget"
                placeholder="How much money needs to be raised"
                value={goalAmount === 0 ? '' : goalAmount}
                onChange={e => {handleChanges(e); checker(e)}}
            />
            {!error && <p className='errorText'>Please make sure to enter a correct price</p>}
            <h4>Project Difficulty Level</h4>
            <select
                required
                name="difficulty"
                value={difficulty}
                onChange={e => handleChanges(e)}
            >
                <option >Select Difficulty</option>
                <option >Easy</option>
                <option >Medium</option>
                <option >Hard</option>

            </select>
            <Droppy images={images} setProjectDetails={setProjectDetails} projectDetails={projectDetails} />
            <div className="form-navigation">
                <button className="prev-step" onClick={() => setFormPosition(2)}><FaArrowLeft />&nbsp;Previous</button>
                <button className="next-step submit" type="submit">Submit</button>
            </div>
        </form >
    );
};

export default Form3;
