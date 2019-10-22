import React from 'react';


const PeopleHeader = props => {
    const { mainTabs, selectedMainTab } = props;
    
    return (
        <>
            <section className="people-header" >
                <div className="profile-image"></div>
                <div className="name">Name</div>
                <div className="contact">Contact Info</div>
                <div className="address">Address</div>
                {selectedMainTab === mainTabs.studentTabs[1] ?   // If rendering team no status
                    null
                 : (
                    <div className="verified"></div> 
                ) }
            </section>
        </>
    );
}


export default PeopleHeader;

