import React from 'react'

const Form1 = ({ projName, projStartDate, projDescription, handleChanges, setFormPosition }) => {

    return (
        <form onSubmit={() => setFormPosition(2)} className="form-1" >
            <h2>Project Name</h2>
            <input
                required
                label="Project Name"
                name="projName"
                type="text"
                className="name"
                placeholder="Alpha Wolf Squadron"
                value={projName}
                onChange={e => handleChanges(e)}
            />
            <h2>Project Start Date</h2>
            <input
                required
                name="projStartDate"
                type="date"
                className="start-date"
                value={projStartDate}
                onChange={e => handleChanges(e)}
            />
            <h2>Project Description</h2>
            <textarea
                required
                name="projDescription" S
                type="text"
                className="description"
                placeholder="Project Description"
                value={projDescription}
                onChange={e => handleChanges(e)}
            />
            <button className="next-step">Next Step!</button>
        </form >
    );
};

export default Form1;