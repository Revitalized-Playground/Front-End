import React from 'react'

const Form1 = ({ name, description, handleChanges, setFormPosition, startDate }) => {

    return (
        <form onSubmit={() => setFormPosition(2)} className="form-1" >
            <h2>Name</h2>
            <input
                required
                label="Project Name"
                name="name"
                type="text"
                className="name"
                placeholder="Alpha Wolf Squadron"
                value={name}
                onChange={e => handleChanges(e)}
            />
            <h2>Start Date</h2>
            <input
                required
                name="startDate"
                type="date"
                className="start-date"
                value={startDate}
                onChange={e => handleChanges(e)}
            />
            <h2>Description</h2>
            <textarea
                required
                name="description"
                type="text"
                className="description"
                placeholder="Project Description"
                value={description}
                onChange={e => handleChanges(e)}
            />
            <button className="next-step">Next! &rarr;</button>
        </form>
    );
};

export default Form1;
