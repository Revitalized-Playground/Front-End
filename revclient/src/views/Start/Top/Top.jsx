import React from 'react';

const Top = () => {
    return (
        <div className="topContainer">
            <div className="title">
                <p>What is your role</p>
                <p className="questionMark">?</p>    
            </div>
            <div className="roles">
                <div className="role">
                    <div className="bar student"></div>
                    <p>Student</p>
                </div>
                <div className="role">
                    <div className="bar employer"></div>
                    <p>Employer</p>
                </div>
                <div className="role">
                    <div className="bar donor"></div>
                    <p>Donor</p>
                </div>
                <div className="role">
                    <div className="bar trainer"></div>
                    <p>Master Trainer</p>
                </div>
            </div>
        </div>
    );
};

export default Top;