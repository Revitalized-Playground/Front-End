import React from 'react'
import whereDoWeGoFromHereImg from "../../../../assets/ProjectPage/WHERE DO WE GO FROM HERE.png"

const StudentCTA = () => {
    return (
        <div className="student-cta">
            <div className="cta">
                <h2> Wondering Where <br /> We Go From Here?</h2>
                <p>Debt free hands-on education to rebuilding<br /> local communities through crowdfunding.</p>
                <button>See More!</button>
            </div>
            <img src={whereDoWeGoFromHereImg} alt="Where do we go from here" />
        </div>
    );
};

export default StudentCTA;