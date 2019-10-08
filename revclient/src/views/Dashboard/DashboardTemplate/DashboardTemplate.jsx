import React from 'react';

import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Main from './Main/Main';

const DashboardTemplate = props => {
    
    return (
        <>
            <section className="dashboard">
                <Sidebar user={props.user} />

                {/* conditionally render header to initially show list of projects? 
                    use different routes?
                */ }

				<section className="dashboard-body">
					{props.projects.map(project => {
                        return <Header key={project.id} project={project} />;
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
