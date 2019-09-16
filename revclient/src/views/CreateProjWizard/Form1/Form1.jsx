import React from 'react'

const Form1 = ({ projName, projStartDate, projDescription, setProjectDetails, setFormPosition }) => {

    return (
        <form onSubmit={() => setFormPosition(2)} className="Form-1" >
            Form 1
            <button className="next-step">Next Step!</button>
        </form >
    );
};

export default Form1;