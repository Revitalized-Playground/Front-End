import React from 'react';

import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Main from './Main/Main';

// import { useQuery } from '@apollo/react-hooks';
// import { GET_USER } from '../../../graphql/queries/Users';

// import { users, projects } from '../dashboarddummydata';

const DashboardTemplate = props => {
    
    // const { loading, error, data } = useQuery(GET_USER);
    
    // if (loading) return <p>loading....</p>;
    // if (error) return <p>Error....</p>;

    return (
        <>
            <section className="dashboard">
                <Sidebar user={props.user} />

				<section className="dashboard-body">
					{props.projects.map(project => {
                        return <Header key={project.id+Math.random()} project={project} />;
					})}
                    <Main
                        defaultTab={props.defaultTab}
                        tabs={props.tabs}
                        list={props.list}
                    />
				</section>
			</section>
		</>
	);
};

export default DashboardTemplate;
