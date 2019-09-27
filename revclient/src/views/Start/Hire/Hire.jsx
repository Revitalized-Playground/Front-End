import React from 'react';

import Company from './Company/Company';

const Hire = () => {
    
    const companies = [
        {
            name: "wework",
            image: "",
            logo: ""
        },
        {
            name: "Habitat for Humanity",
            image: "",
            logo: ""
        },
        {
            name: "TaskRabbit",
            image: "",
            logo: ""
        }
    ]
    
    return (
        <div className="hireContainer">
            <h2>Employers that Hire Our Apprentices</h2>
            <div className="companies">
                {companies.map(c => {
                    return <Company key={c.name} info={c} />
                })}
            </div>
        </div>
    );
};

export default Hire;
