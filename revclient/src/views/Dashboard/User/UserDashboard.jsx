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
			email: 'fractured2k@gmail.com',
			firstName: 'Skyelar',
			lastName: 'Carrol',
			handle: '@Skyelar',
			profileImage: '',
			city: 'Grand Haven',
			zip: '',
			address: '',
			state: 'MI',
			aptNumber: '',
			projects: [],
			phoneNumber: '889-214-8971',
			zoom: 'SkyfiCrole',
			certifications: 2,
			hoursLogged: 396,
			creditHours: 22,
			achievements: [
				{
					name: 'Master Key Award',
					image: '',
					number: 2,
				},
				{
					name: 'Thanos Grip Award',
					image: '',
					number: 1,
				},
				{
					name: 'Magic Wand',
					image: '',
					number: 12,
				},
				{
					name: 'Rupee Award',
					image: '',
					number: 31,
				},
			],
		},
		{
			id: 2,
			userAccountId: 2,
			email: 'Maleescha Mclarin@gmail.com',
			firstName: 'Maleescha',
			lastName: 'Mclarin',
			handle: '@TheeMclarin ',
			profileImage: '',
			city: 'Detroit',
			zip: '',
			address: '',
			state: 'MI',
			aptNumber: '',
			projects: [],
			phoneNumber: '356-230-9971',
			zoom: 'TheeMclarin',
			certifications: 2,
			hoursLogged: 396,
			creditHours: 22,
			achievements: [],
		},
	];

	const projects = [
		{
			id: 1,
			profile: 1,
			name: "Rennovating Cup of Joe's Cafe",
			description:
				'Work with Joe, the cafe owner to implement blueprint including working with construction manager, interior design and final inspection',
			address: '555 Coffee Drive',
			state: 'MI',
			zip: '48127',
			city: 'Detroit',
			goalAmount: 20000,
			amountFunded: 5000,
			status: 'Upcoming',
			dueDate: 'Oct 25, 2019',
		},
	];

	const [
		apprentice,
		// setApprentice
	] = useState(true);

	return (
		<>
			<section className="user-dashboard">
				{apprentice ? <Sidebar user={users[0]} /> : <Sidebar user={users[1]} />}

				<section className="user-dashboard-body">
					{projects.map(project => {
						return <Header key={project.id} project={project} />;
					})}
					{/* <Header project={project} /> */}
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
