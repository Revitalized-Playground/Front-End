import React from 'react';
import { FaArrowRight } from "react-icons/fa";


const Form1 = ({ projName, projStartDate, projDescription, handleChanges, setFormPosition }) => {

    return (
        <form onSubmit={() => setFormPosition(2)} className="form-1" >
            <h2>Name</h2>
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
            <h2>Start Date</h2>
            <input
                required
                name="projStartDate"
                type="date"
                className="start-date"
                value={projStartDate}
                onChange={e => handleChanges(e)}
            />
            <h2>Description</h2>
            <textarea
                required
                name="projDescription"
                type="text"
                className="description"
                placeholder="Project Description"
                value={projDescription}
                onChange={e => handleChanges(e)}
            />
            <div className="form-navigation first-step">
                <button className="next-step">Next&nbsp;<FaArrowRight /></button>
            </div>
        </form >
    );
};

export default Form1;
