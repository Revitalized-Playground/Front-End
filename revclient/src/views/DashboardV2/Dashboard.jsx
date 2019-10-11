import React, { useState, useEffect } from 'react';

import Nav from '../../components/Layout/Nav';

import Footer from "../../components/Layout/Footer";

import Sidebar from './DashboardComponents/Sidebar/Sidebar';
import Header from './DashboardComponents/Header/Header';
import Main from './DashboardComponents/Main/Main';
import DashNav from "./DashboardComponents/DashNav/DashNav";
import Donations from "./DashboardComponents/Donations/Donations";

import { useQuery } from '@apollo/react-hooks';
import { GET_USER_PROFILE } from '../../graphql/queries/Users';

import { defaultTab, tabs, list } from './dashboarddummydata';



export default function Dashboard() {
    const [ tabState, setTab ] = useState({ selectedTab: "Projects", tabs: ["Projects", "Donations", "Student"] });
    const [ selectedProject, setProject ] = useState({ showMore: false, id: null });

    const { loading, error, data, refetch } = useQuery(GET_USER_PROFILE); // This pulls in tons of data and can pull more!
    
    const changeSelected = selectedTab => {
        setTab({ ...tabState, selectedTab: selectedTab }) 
    };

    useEffect(() => {
        refetch();
    }, []);

    
    if (loading) return <p>loading....</p>;
    if (error) return <p>Error....</p>;


    const getProjectAdminView = () => {

        const projectAdminHeader = data.me.projects.map(project => (
            <>
                <Header 
                    key={project.id} 
                    project={project} 
                    setProject={setProject}
                    selectedProject={selectedProject}
                />

                {project.id === selectedProject.id ? (
                    <Main
                        defaultTab={defaultTab}
                        tabs={tabs}
                        list={list}
                        project={project}
                    />
                ) : null}
            </>
        ))

        return (
            <>
                {projectAdminHeader}
            </>
        )
    }
    const getStudentView = getProjectAdminView



    return (
        <>
            {}
            <div className="dashboard-container" >
                <Nav />

                    <section className="dashboard">
                        <Sidebar user={data.me} />

                        <section className="dashboard-body">

                            <DashNav changeSelected={changeSelected} tabs={tabState.tabs} selectedTab={tabState.selectedTab} />

                            { // Renders the project admin components
                                data.me.projects && tabState.selectedTab === "Projects" ? getProjectAdminView() : null
                            }


                            { // Renders the donations components
                                data.me.donations && tabState.selectedTab === "Donations" ? (
                                    <Donations 
                                        donations={data.me.donations}
                                    />
                                ) : null
                            }

                            { // Renders the donations components
                                data.me.studentProjects && tabState.selectedTab === "Student" ? (
                                    getStudentView()
                                ) : null
                            }



                        </section>
                    </section>
                    
                <Footer />
            </div>

        </>
    )
}

