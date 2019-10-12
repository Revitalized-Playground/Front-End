import React, { useState, useEffect } from 'react';

import Nav from '../../components/Layout/Nav';
import Footer from "../../components/Layout/Footer";
import Sidebar from './DashboardComponents/Sidebar/Sidebar';
import Header from './DashboardComponents/Header/Header';
import Main from './DashboardComponents/Main/Main';
import DashNav from "./DashboardComponents/DashNav/DashNav";
import Donations from "./DashboardComponents/Donations/Donations";
import BoringUser from "./DashboardComponents/BoringUser/BoringUser";

import { useQuery } from '@apollo/react-hooks';
import { GET_USER_PROFILE } from '../../graphql/queries/Users';


export default function Dashboard() {
    let possibleDashNavTabs = ["Projects", "Student", "Donations", "Trade Master"]; // Change these array values if you need to change the name of the dashnav tabs
    let possibleMainTabs = { // Change these values to adjust the names of the tabs in the main view.
        projectAdminTabs: ["Students", "Trade Masters", "Tasks", "Metrics"],
        studentTabs: ["New Tasks", "Tasks In Progress", "Completed Tasks"],
        tradeMasterTabs: ["Students", "Tasks", "Metrics"],
        donationTabs: ["Donations"],
    }

    const [ dashNavTabState, setDashNavTab ] = useState({ selectedDashNavTab: possibleDashNavTabs[0], tabs: [] });
    const [ mainTabState, setMainTabState ] = useState({ defaultMainTab: "New Tasks", mainTabs: ["New Tasks", "Tasks In Progress", "Completed Tasks", "Activity Feed"] })
    const [ selectedProject, setProject ] = useState({ showMore: false, id: null, buttonToggle: false });
    const [ mainTabs, setMainTabs ] = useState({...possibleMainTabs, defaultMainTab:""});

    const { loading, error, data, refetch } = useQuery(GET_USER_PROFILE); // This pulls in tons of data and can pull more!


    const changeSelected = userSelectedTab => {
        setDashNavTab({ ...dashNavTabState, selectedDashNavTab: userSelectedTab }) 
    };

    const setAvailableTabs = (newAvailTabArray) => {
        setDashNavTab({ ...dashNavTabState, tabs: newAvailTabArray })
    }

    useEffect(() => {
        refetch();
        let availTabs = [];
        const addProjects = data ? data.me.projects.length > 0 ? availTabs.push(possibleDashNavTabs[0]) : null : null; 
        const addStudentProjects = data ? data.me.studentProjects.length > 0 ? availTabs.push(possibleDashNavTabs[1]) : null : null;
        const addDonations = data ? data.me.donations.length > 0 ? availTabs.push(possibleDashNavTabs[2]) : null : null;
        const addTrademaster = data ? data.me.tradeMasterProjects.length > 0 ? availTabs.push(possibleDashNavTabs[3]) : null : null;
        
        console.log(addProjects, addStudentProjects, addDonations, addTrademaster);
        
        setAvailableTabs(availTabs);
        
    }, [data]);
    
    if (loading) return <p>loading....</p>;
    if (error) return <p>Error....</p>;

    const getHeaderWithMain = (projectArray) => {
        if (!projectArray) return null;

        let renderedHeaderMain;

        if(dashNavTabState.selectedDashNavTab === possibleDashNavTabs[0]) { // Selected tab is Project Admin
            renderedHeaderMain = projectArray.map(project => (
                <>
                    {!selectedProject.id ? ( // If there is no selected project, render all the headers in this view
                        <Header 
                            key={project.id} 
                            project={project} 
                            setProject={setProject}
                            selectedProject={selectedProject}
                        />
                    ) : project.id === selectedProject.id ? ( // If there is a selected project, only render that header
                        <Header 
                            key={project.id} 
                            project={project} 
                            setProject={setProject}
                            selectedProject={selectedProject}
                        />
                    ) : null}
                    
                    {project.id === selectedProject.id ? ( // Render the main tab of the selected header
                        <Main
                            defaultTab={mainTabs.projectAdminTabs[0]}
                            setMainTabs={setMainTabs}
                            mainTabs={mainTabs.projectAdminTabs}
                            project={project}
                        />
                    ) : null}
                </>
            ))
        }

        if(dashNavTabState.selectedDashNavTab === possibleDashNavTabs[3]) { // Selected tab is Student
            renderedHeaderMain = projectArray.map(project => (
                <>
                    {!selectedProject.id ? (
                        <Header 
                            key={project.project.id} 
                            project={project.project} 
                            setProject={setProject}
                            selectedProject={selectedProject}
                        />
                    ) : project.id === selectedProject.id ? (
                        <Header 
                            key={project.project.id} 
                            project={project.project} 
                            setProject={setProject}
                            selectedProject={selectedProject}
                        />
                    ) : null}
                    
                    {project.project.id === selectedProject.id ? (
                        <Main
                            // defaultTab={mainTabState.defaultMainTab}
                            // setMainTabState={setMainTabState}
                            // tabs={mainTabState.mainTabs}
                            // project={project.project}
                        />
                    ) : null}
                </>
            ))
        }


        return (
            <>
                {/* {selectedProject.id ? renderedHeaderMain : renderedHeaderMain} */}
                {renderedHeaderMain}
            </>
        )
    }



    return (
        <>
            {data.me.projects ? setAvailableTabs : null}
            <div className="dashboard-container" >
                <Nav />
                    <section className="dashboard">
                        <Sidebar user={data.me} />
                        <section className="dashboard-body">
                            
                            {dashNavTabState.tabs.length <= 1 ? null : ( // Only renders the dash nav IF there are more than 1 categories
                                <DashNav changeSelected={changeSelected} tabs={dashNavTabState.tabs} selectedTab={dashNavTabState.selectedDashNavTab} />
                            )}

                            { // Renders the project admin components
                                data.me.projects && dashNavTabState.selectedDashNavTab === possibleDashNavTabs[0] ? (
                                    getHeaderWithMain(data.me.projects) 
                                ) : null
                            }

                            { // Renders the student components
                                data.me.studentProjects.project && dashNavTabState.selectedDashNavTab === possibleDashNavTabs[1] ? (
                                    getHeaderWithMain(data.me.studentProjects.project)
                                ) : null
                            }

                            { // Renders the donations components
                                data.me.donations && dashNavTabState.selectedDashNavTab === possibleDashNavTabs[2]  ? (
                                    <Donations 
                                        donations={data.me.donations}
                                    />
                                ) : null
                            }

                            { // Renders the trades master components
                                data.me.tradeMasterProjects && dashNavTabState.selectedDashNavTab === possibleDashNavTabs[3] ? (
                                    getHeaderWithMain(data.me.tradeMasterProjects)
                                ) : null
                            }

                            { // This means the user has nothing. Push them to browse
                                dashNavTabState.tabs.length === 0 ? (
                                    <BoringUser />
                                ) : null
                            }
                        </section>
                    </section>        
                <Footer />
            </div>

        </>
    )
}

