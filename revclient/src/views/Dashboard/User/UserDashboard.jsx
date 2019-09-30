import React, { useState } from 'react';
import Skeleton,  { } from "react-loading-skeleton";

import Sidebar from './Sidebar/Sidebar';

const UserDashboard = () => {

    const users = [
        {
            skyelar: {
                id: 1,
                userAccountId: 1,
                email: "fractured2k@gmail.com",
                firstName: "Skyelar",
                lastName: "Carrol",
                profileImage: "",
                city: "Grand Haven",
                zip: "",
                address: "",
                state: "MI",
                aptNumber: "",
                projects: [],
                phoneNumber: "889-214-8971",
                zoom: "SkyfiCrole",
                certifications: 2,
                hoursLogged: 396,
                creditHours: 22,
                achievements: [],
            }
        },
        {
            maleescha: {
                id: 2,
                userAccountId: 2,
                email: "Maleescha Mclarin@gmail.com",
                firstName: "Maleescha",
                lastName: "Mclarin",
                profileImage: "",
                city: "Detroit",
                zip: "",
                address: "",
                state: "MI",
                aptNumber: "",
                projects: [],
                phoneNumber: "356-230-9971",
                zoom: "TheeMclarin",
                certifications: 2,
                hoursLogged: 396,            
                creditHours: 22,
                achievements: [],
            }
        }
    ]

    const [apprentice, 
        // setApprentice
    ] = useState(true);

    // const toggleUserType = () => {
    //     setApprentice(!apprentice)
    // }
    return (
        <>
            <section className="user-dashboard">
                { apprentice
                    ? <Sidebar user={users.skyelar} />
                    : <Sidebar user={users.maleescha} />
                }
                
                <section className="user-dashboard-body">
                    <div className="user-dashboard-header section">
                        <Skeleton count={1} height={50} width={200} />
                        <Skeleton count={1} height={50} width={125} />
                        <Skeleton count={1} height={50} width={75} />
                    </div>

                    {/* <br/> */}
                    
                    <div className="user-dashboard-main section">
                        <div className="user-dashboard-title">
                            <Skeleton count={1} height={25} width={200} />
                            <Skeleton count={1} height={25} width={125} />
                            <Skeleton count={1} height={25} width={75} />
                        </div>

                        <hr/>
                        <div className="user-dashboard-main-body">
                            <Skeleton count={5} height={125}  />
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default UserDashboard
