import React, { useState } from 'react';
import Skeleton,  { } from "react-loading-skeleton";

import Sidebar from './Sidebar/Sidebar';

// import { useQuery } from '@apollo/react-hooks';
// import { GET_USER } from '../../graphql/queries/Users';

const UserDashboard = () => {

    // const { client, loading, error, data } = useQuery(GET_USER);

    const users = [
        {
            id: 1,
            userAccountId: 1,
            email: "fractured2k@gmail.com",
            firstName: "Skyelar",
            lastName: "Carrol",
            handle: "@Skyelar",
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
            achievements: [
                {
                    name: "Master Key Award",
                    image: "",
                    number: 2
                },
                {
                    name: "Thanos Grip Award",
                    image: "",
                    number: 1
                },
                {
                    name: "Magic Wand",
                    image: "",
                    number: 12
                },
                {
                    name: "Rupee Award",
                    image: "",
                    number: 31
                }
            ],
        },
        {
            id: 2,
            userAccountId: 2,
            email: "Maleescha Mclarin@gmail.com",
            firstName: "Maleescha",
            lastName: "Mclarin",
            handle: "@TheeMclarin ",
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
    ]

    const [apprentice, 
        // setApprentice
    ] = useState(true);

    return (
        <>
            <section className="user-dashboard">
                { apprentice
                    ? <Sidebar user={users[0]} />
                    : <Sidebar user={users[1]} />
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
