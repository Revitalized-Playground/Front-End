import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';

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
            profileImage: "https://res.cloudinary.com/revitalize/image/upload/v1569861721/user%20dashboard/Skyelar_Carrol_PROFILE_PICTURE_left_side_yjinm3.png",
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
                    image: "https://res.cloudinary.com/revitalize/image/upload/v1569861718/user%20dashboard/Master_Key_Award_rq39jb.svg",
                    number: 2
                },
                {
                    name: "Thanos Grip Award",
                    image: "https://res.cloudinary.com/revitalize/image/upload/v1569861722/user%20dashboard/Thanos_Grip_Award_bk41rq.svg",
                    number: 1
                },
                {
                    name: "Magic Wand",
                    image: "https://res.cloudinary.com/revitalize/image/upload/v1569861718/user%20dashboard/Magic_Wand_ixlwzs.svg",
                    number: 12
                },
                {
                    name: "Rupee Award",
                    image: "https://res.cloudinary.com/revitalize/image/upload/v1569861720/user%20dashboard/Rupee_Award_xupbpz.svg",
                    number: 36
                }
            ],
            apprentice: true,
            master: false
        },
        {
            id: 2,
            userAccountId: 2,
            email: "Maleescha Mclarin@gmail.com",
            firstName: "Maleescha",
            lastName: "Mclarin",
            handle: "@TheeMclarin ",
            profileImage: "https://res.cloudinary.com/revitalize/image/upload/v1569861718/user%20dashboard/Maleescha_Mclarin_qsafnt.png",
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
            apprentice: false,
            master: true
        }
    ]

	const project = [
		{
			joesCafe: {
				id: 1,
				profile: 1,
				name: "Joe's Cafe",
				description:
					'Work with Joe, the cafe owner to implement blueprint including workign with construction manager, interior design and final inspection',
				address: '555 Coffee Drive',
				state: 'MI',
				zip: '48127',
				city: 'Detroit',
				goalAmount: 20000,
				amountFunded: 5000,
			},
		},
	];

    return (
        <>
            <section className="user-dashboard">

                <Sidebar user={users[1]} />
                
				<section className="user-dashboard-body">
					<Header project={project.joesCafe} />
					{/* <br/> */}

					<div className="user-dashboard-main section">
						<div className="user-dashboard-title">
							<Skeleton count={1} height={25} width={200} />
							<Skeleton count={1} height={25} width={125} />
							<Skeleton count={1} height={25} width={75} />
						</div>

						<hr />
						<div className="user-dashboard-main-body">
							<Skeleton count={5} height={125} />
						</div>
					</div>
				</section>
			</section>
		</>
	);
};

export default UserDashboard;
