import React, { useState } from 'react';

import Nav from '../../components/Layout/Nav';
import Sidebar from "./DashboardViews/Sidebar/Sidebar";
import Header from "./DashboardViews/Header/Header";
import Main from "./DashboardViews/Main/Main";
import Footer from "../../components/Layout/Footer";

import { useQuery } from '@apollo/react-hooks';
import { GET_USER } from '../../graphql/queries/Users';

import { projects, defaultTab, tabs, list } from './dashboarddummydata';



export default function Dashboard() {
	const [ state, setState ] = useState({
		selectedProjectId: ""
	});
    
	const selectProject = project => {
		setState({
			...state,
			selectedProjectId: project.id,
		});
    };
    

    


    const { loading, error, data } = useQuery(GET_USER);
    
    if (loading) return <p>loading....</p>;
    if (error) return <p>Error....</p>;

    return (
        <>
            <div className="dashboard-container" >
                
                <Nav />
                
                <section className="dashboard">

                    <Sidebar user={data.me} />
                    
                    <section className="dashboard-body">
                        {data.me.projects ? 
                            data.me.projects.map(project => (
                                <Header 
                                    key={project.id+Math.random()} 
                                    project={project} 
                                    selectProject={selectProject}
                                />
                            ))
                        : (
                            projects.map(project => {
                                return <Header key={project.id+Math.random()} project={project} />;
                            })
                        )}


                        {data.me.projects.length > 0 ? (
                            <Main
                                defaultTab={defaultTab}
                                tabs={tabs}
                                list={list}
                                dashboardType="project-admin"
                                selectedProjectId={state.selectedProjectId}
                            />
                        ) : null}
                        
                        {data.me.projects.length < 1 ? (
                        <Main
                            defaultTab={defaultTab}
                            tabs={tabs}
                            list={list}
                            dashboardType="base-user"
                        />
                        ) : null}


                    </section>

			    </section>

                <Footer />
            </div>

        </>
    )
}
 