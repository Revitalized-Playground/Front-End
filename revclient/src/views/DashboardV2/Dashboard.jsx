import React, { useState } from 'react';

import Nav from '../../components/Layout/Nav';

import Footer from "../../components/Layout/Footer";

import Sidebar from './DashboardComponents/Sidebar/Sidebar';
import Header from './DashboardComponents/Header/Header';
import Main from './DashboardComponents/Main/Main';
import HeaderNoProjects from "./DashboardComponents/HeaderNoProjects/HeaderNoProjects";
import DashNav from "./DashboardComponents/DashNav/DashNav";
import Donations from "./DashboardComponents/Donations/Donations";


import { useQuery } from '@apollo/react-hooks';
import { GET_USER_PROFILE } from '../../graphql/queries/Users';

import { defaultTab, tabs, list } from './dashboarddummydata';



export default function Dashboard() {
    const [tabState, setTab] = useState({
        selectedTab: "",
        tabs: ["Projects", 
            // "Learning", "Working", 
            "Donations"
        ]
	});

	const changeSelected = selectedTab => {
		setTab({
            ...tabState,
            selectedTab: selectedTab
        });
    };
    
    const { loading, error, data } = useQuery(GET_USER_PROFILE);
    
    if (loading) return <p>loading....</p>;
    if (error) return <p>Error....</p>;

    console.log("This is the data object coming into dashboard  \n ", data,
    "This is dashboard tab state  \n ", tabState);

    return (
        <>

            <div className="dashboard-container" >
                <Nav />

                    <section className="dashboard">
                        <Sidebar user={data.me} />

                        <section className="dashboard-body">

                            <DashNav changeSelected={changeSelected} tabs={tabState.tabs} selectedTab={tabState.selectedTab} />

                            {data.me.projects && tabState.selectedTab === "Projects" && 
                                data.me.projects.map(project => (
                                    <Header key={project.id} project={project} />
                                ))
                            }

                            {data.me.projects && tabState.selectedTab === "Projects" && 
                                (
                                    <Main
                                        defaultTab={defaultTab}
                                        tabs={tabs}
                                        list={list}
                                    />
                                )
                            }


                            {data.me.donations && tabState.selectedTab === "Donations" ? (
                                <Donations 
                                    me={data.me}
                                />
                            ) : null}



                        </section>
                    </section>
                    
                <Footer />
            </div>

        </>
    )
}

