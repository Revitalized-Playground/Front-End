import React, { useState } from 'react';

import Nav from '../../components/Layout/Nav';

import Footer from "../../components/Layout/Footer";

import Sidebar from './DashboardComponents/Sidebar/Sidebar';
import Header from './DashboardComponents/Header/Header';
import Main from './DashboardComponents/Main/Main';
// import MainNoBody from "./DashboardComponents/MainNoBody/MainNoBody";
import DashNav from "./DashboardComponents/DashNav/DashNav";
import Donations from "./DashboardComponents/Donations/Donations";

import { useQuery } from '@apollo/react-hooks';
import { GET_USER_PROFILE } from '../../graphql/queries/Users';

// import { defaultTab, tabs, list } from './dashboarddummydata';



export default function Dashboard() {
    const [tabState, setTab] = useState({ selectedTab: "",tabs: ["Projects", 
            // "Learning", "Working", 
            "Donations"] });
    const [selectedProject, setSelectedProject] = useState({ projectId: null })

	const changeSelected = selectedTab => {setTab({ ...tabState, selectedTab: selectedTab }) };
    

    
    const { loading, error, data } = useQuery(GET_USER_PROFILE);
    if (loading) return <p>loading....</p>;
    if (error) return <p>Error....</p>;


    const getProjectAdminHeader = () => {
        

        const projectAdminHeader = data.me.projects.map(project => (
            <>
                <Header key={project.id} project={project} setSelectedProject={setSelectedProject} />
                
            </>
        ))

        return (    
            <>
                {projectAdminHeader}
                {/* {selectedProject && selectedProject === data.me.tasks.id ? (
                    <Main
                        defaultTab={defaultTab}
                        tabs={tabs}
                        list={list}
                    />
                ) : null} */}
            </>
        )
    }


    return (
        <>

            <div className="dashboard-container" >
                <Nav />

                    <section className="dashboard">
                        <Sidebar user={data.me} />

                        <section className="dashboard-body">

                            <DashNav changeSelected={changeSelected} tabs={tabState.tabs} selectedTab={tabState.selectedTab} />

                            { // Renders the project admin components
                                data.me.projects && tabState.selectedTab === "Projects" && getProjectAdminHeader()
                            }


                            { // Renders the donations components
                                data.me.donations && tabState.selectedTab === "Donations" ? (
                                <Donations 
                                    me={data.me}
                                />
                            ) : null
                            }



                        </section>
                    </section>
                    
                <Footer />
            </div>

        </>
    )
}
