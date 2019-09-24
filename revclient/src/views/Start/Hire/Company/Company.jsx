import React from 'react';

const Company = props => {
    return (
        <div className="companyContainer">
            <img src={props.info.image} alt="background" />
            {/* <img src={props.info.logo} alt="logo" /> */}
            <div className="logo">
                {props.info.name}
            </div>
        </div>
    );
};

export default Company;