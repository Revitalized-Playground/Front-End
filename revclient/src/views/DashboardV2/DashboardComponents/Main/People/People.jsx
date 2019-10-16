import React, { useState, useEffect } from 'react';
import Toggle from "react-toggle";


const People = props => {
    const { person } = props;
    // console.log("person: ", person);
    const [ verified, setVerified ] = useState(false);

    useEffect(() => {
        // Check verified 
        if (person.profile.verified) return setVerified(true)
        setVerified(false)
    }, [])

    

    return (
        <>
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
                        <Toggle 
                            defaultChecked={verified}
                            onChange={() => setVerified(!verified)}
                        />
                    </div>

                </div>

            </div>

        </>
    )
    
}


export default People;

