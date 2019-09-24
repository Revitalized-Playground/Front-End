import React, {useState} from 'react'

const Form1 = ({ projDuration, projBudget, handleChanges, submitForm, setFormPosition }) => {

    const [err, setErr] = useState(true)
    console.log(err)

    const checker = (e) => {
        e.target.value.split('.').map(each => {
            if (isNaN(each)) {
                return setErr(false)
            } else {
                return setErr(true)
            }
        })
    }

    return (
        <form onSubmit={(event) => submitForm(event)} className="form-3" >
            <h2>Project Duration</h2>
            <input
                required
                label="Project Name"
                name="projNDuration"
                type="text"
                className="duration"
                placeholder="9 Months"
                value={projDuration}
                onChange={e => handleChanges(e)}
            />
            <h2>Project Budget</h2>
            <input
                required
                min='0'
                step='0.10'
                name="projBudget"
                type="number"
                className="proj-budget"
                value={projBudget === 0 ? '' : projBudget}
                onChange={e => {handleChanges(e); checker(e)}}
            />
            {!err && <p className='errorText'>Please make sure to enter a correct price</p>}
            <h2>Project Difficulty Level</h2>
            <select
                required
                name="projDifficultyLevel"
                onChange={e => handleChanges(e)}
            >
                <option >Select Difficulty</option>
                <option >Easy</option>
                <option >Medium</option>
                <option >Hard</option>

            </select>
            <div className="form-navigation">
                <button className="next-step" type="submit">Submit!</button>
                <button className="prev-step" onClick={() => setFormPosition(2)}>&larr; Previous!</button>
            </div>
        </form >
    );
};

export default Form1;