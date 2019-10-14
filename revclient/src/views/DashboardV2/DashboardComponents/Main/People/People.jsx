import React from 'react';


const People = props => {
    const { person } = props;
    // console.log("props: ", props);
    // console.log("person: ", person);

    return (
        <>
            <div className="people" key={person.profile.name + Date.now()}>

                <div className="people-card-container">
                    
                    <div className="people-body">
                        
                        {person.profile.profileImage ? (
                            <div className="people-img-container">
                                <img src={person.profile.profileImage} alt="" />
                            </div>
                        ) : (
                            <div className="display-none"></div>
                        )}

                        <div className="people-profile name">
                            <h5>{person.profile.firstName} {person.profile.lastName}</h5>
                        </div>

                        <div className="people-profile contact" >
                            <p className="email">{person.profile.email}</p>
                            <p className="phone">{person.profile.phone}</p>
                        </div>

                        <div className="people-profile address">
                            <p>{person.profile.address}</p>
                            {person.profile.aptNumber ? (
                                <p>{person.profile.aptNumber}</p>
                            ) : null}
                            <p>{person.profile.city}, {person.profile.state} {person.profile.zip}</p>
                        </div>
                    
                        <div className="people-profile verified">
                            <p>{person.profile.verified ? "Verified" : "Not Verified"}</p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
    
}


export default People;

