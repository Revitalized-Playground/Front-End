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

// import { defaultTab, tabs, list } from './dashboarddummydata';

export default function Dashboard() {
    const [ tabState, setTab ] = useState({ selectedTab: "Projects", tabs: [] });
    const [ mainTabState, setMainTabState ] = useState({ defaultMainTab: "New Tasks", mainTabs: ["New Tasks", "Tasks In Progress", "Completed Tasks", "Activity Feed"] })
    const [ selectedProject, setProject ] = useState({ showMore: false, id: null, buttonToggle: false });
    
    // const [selectedProject, setSelectedProject] = useState();
    // const [toggle, setToggle] = useState(false);
    // const [array, setArray] = useState([]);

    const { loading, error, data, refetch } = useQuery(GET_USER_PROFILE); // This pulls in tons of data and can pull more!
    
    const changeSelected = selectedTab => {
        setTab({ ...tabState, selectedTab: selectedTab }) 
    };

    const setAvailableTabs = (availTabArray) => {
        setTab({ ...tabState, tabs:availTabArray })
    }

    useEffect(() => {
        refetch();
        let availTabs = []
        const addProjects = data ? data.me.projects.length > 0 ? availTabs.push("Projects") : null : null;
        const addStudentProjects = data ? data.me.studentProjects.length > 0 ? availTabs.push("Student") : null : null;
        const addDonations = data ? data.me.donations.length > 0 ? availTabs.push("Donations") : null : null;
        const addTrademaster = data ? data.me.tradeMasterProjects.length > 0 ? availTabs.push("Tradesman") : null : null;
        console.log(addProjects, addStudentProjects, addDonations, addTrademaster);
        
        setAvailableTabs(availTabs);
        
    }, [data]);

    // useEffect(() => {
    //     refetch();
    //     if(data) {
    //         data.me.projects.map(project => {
    //             project.type = "admin";
    //             setArray(array => [...array, project])
    //         })
    //         data.me.donations.map(project => {
    //             project.type = "donation";
    //             setArray(array => [...array, project])
    //         })
    //         data.me.studentProjects.map(project => {
    //             project.type = "student";
    //             setArray(array => [...array, project])
    //         })
    //         data.me.tradeMasterProjects.map(project => {
    //             project.type = "master";
    //             setArray(array => [...array, project])
    //         })
    //     }
    // }, [data])
    
    if (loading) return <p>loading....</p>;
    if (error) return <p>Error....</p>;

    const getHeaderWithTasks = (projectArray) => {
        if (!projectArray) return null

        const projectAdminHeader = projectArray.map(project => (
            <>
                {!selectedProject.id ? (
                    <Header 
                        key={project.id} 
                        project={project} 
                        setProject={setProject}
                        selectedProject={selectedProject}
                    />
                ) : project.id === selectedProject.id ? (
                    <Header 
                        key={project.id} 
                        project={project} 
                        setProject={setProject}
                        selectedProject={selectedProject}
                    />
                ) : null}
                
                {project.id === selectedProject.id ? (
                    <Main
                        defaultTab={mainTabState.defaultMainTab}
                        setMainTabState={setMainTabState}
                        tabs={mainTabState.mainTabs}
                        project={project}
                    />
                ) : null}
            </>
        ))

        return (
            <>
                {selectedProject.id ? projectAdminHeader : projectAdminHeader}
            </>
        )
    }
    // const getStudentView = getHeaderWithTasks // this is just for dev. Soon it will be real.

    {/* {}

    useEffect(() => {
        refetch();
        if(data) {
            data.me.projects.map(project => {
                project.type = "admin";
                setArray(array => [...array, project])
            })
            data.me.donations.map(project => {
                project.type = "donation";
                setArray(array => [...array, project])
            })
            data.me.studentProjects.map(project => {
                project.type = "student";
                setArray(array => [...array, project])
            })
            data.me.tradeMasterProjects.map(project => {
                project.type = "master";
                setArray(array => [...array, project])
            })
        }
    }, [data])
    */}



    return (
        <>
            {data.me.projects ? setAvailableTabs : null}
            <div className="dashboard-container" >
                <Nav />
                    <section className="dashboard">
                        <Sidebar user={data.me} />
                        <section className="dashboard-body">
                            
                            {}

                            <DashNav changeSelected={changeSelected} tabs={tabState.tabs} selectedTab={tabState.selectedTab} />

                            { // Renders the project admin components
                                data.me.projects && tabState.selectedTab === "Projects" ? getHeaderWithTasks(data.me.projects) : null
                            }

                            { // Renders the student components
                                data.me.studentProjects.project && tabState.selectedTab === "Student" ? (
                                    getHeaderWithTasks(data.me.studentProjects.project)
                                ) : null
                            }

                            { // Renders the donations components
                                data.me.donations && tabState.selectedTab === "Donations" ? (
                                    <Donations 
                                        donations={data.me.donations}
                                    />
                                ) : null
                            }

                            { // This means the user has nothing. Push them to browse
                                tabState.tabs.length === 0 ? (
                                    <BoringUser />
                                ) : null
                            }




                                {/* toggle
                                ? 
                                    array.map(project => {
                                        if (project.id === selectedProject){
                                            return <>
                                                <Header
                                                    key={project.id}
                                                    project={project}
                                                    setSelectedProject={setSelectedProject}
                                                    setToggle={setToggle}
                                                    toggle={toggle}
                                                />
                                                <Main project={project} />
                                            </>
                                        }
                                    })
                                :
                                    array.map(project => (
                                        <>
                                            <Header
                                                key={project.id}
                                                project={project}
                                                setSelectedProject={setSelectedProject}
                                                setToggle={setToggle}
                                                toggle={toggle}
                                            />
                                        </>
                                    ))
                            } */}


                        </section>
                    </section>        
                <Footer />
            </div>

        </>
    )
}

