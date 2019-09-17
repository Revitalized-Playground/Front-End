import React from 'react'

const Form1 = ({ projDuration, projBudget, handleChanges, submitForm, setFormPosition }) => {

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
                name="projBudget"
                type="number"
                className="proj-budget"
                value={projBudget}
                onChange={e => handleChanges(e)}
            />
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
                <button className="next-step" type="submit">Next Step!</button>
                <button className="prev-step" onClick={() => setFormPosition(2)}>Previous Step!</button>
            </div>
        </form >
    );
};

export default Form1;