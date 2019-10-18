import React, { useState, useEffect } from 'react';
import Toggle from "react-toggle";


const People = props => {
    const { person, selectedMainTab, mainTabs } = props;

    const [ verified, setVerified ] = useState(false);
    const [ projectApplicantState, setProjectApplicantState ] = useState({
        project: "", // project Id
        profile: "", // Profile ID
        application: "", // Application id?
    });

    useEffect(() => {   // Check verified 
        if (person.profile.verified) return setVerified(true)
        setVerified(false)
    }, [])

    if (selectedMainTab === mainTabs.projectAdminTabs[0]) { // Applicants
        console.log("this is an applicant")
    }

    console.log("People props", props, projectApplicantState);

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
                
                    {selectedMainTab === mainTabs.projectAdminTabs[0] ? (  // If rendering applicants, allow setting status
                        <div className="people-profile assign" >
                            <p>Application status:</p>
                            {person.status === "PENDING" ? (
                                <select
                                    value={person.status}
                                    onChange={(event) => setProjectApplicantState({ 
                                        ...projectApplicantState, 
                                        profile: person.profile.id, 
                                        project: person.project.id,
                                        application: person.id
                                    })}
                                >
                                    <option value="PENDING">Pending</option>
                                    <option value="ACCEPTED">Accept Application</option>
                                    <option value="DECLINED">Decline Application</option>
                                </select>
                            ) : (person.status === "ACCEPTED" || person.status === "DECLINED") && (
                                <select
                                    disabled
                                    value={person.status}
                                >
                                    <option>{person.status}</option>
                                </select>
                            )}
                        </div>
                    ) : null}

                    {/* <div className="people-profile verified">
                        <Toggle 
                            defaultChecked={verified}
                            onChange={() => setVerified(!verified)}
                        />
                    </div> */}

                </div>

            </div>

        </>
    )
    
}


export default People;

