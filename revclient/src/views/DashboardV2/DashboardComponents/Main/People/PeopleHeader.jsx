import React from 'react';


const PeopleHeader = props => {

    return (
        <>
            <section className="people-header" >
                <div className="profile-image"></div>
                <div className="name">Name</div>
                <div className="contact">Contact Info</div>
                <div className="address">Address</div>
                <div className="verified">Verified</div>
            </section>
        </>
    );
}


export default PeopleHeader;

