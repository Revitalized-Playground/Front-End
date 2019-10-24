import React, { useState, useEffect } from 'react';

import Nav from '../../components/Layout/Nav';
import Footer from "../../components/Layout/Footer";
import Sidebar from './DashboardComponents/Sidebar/Sidebar';
import DashNav from "./DashboardComponents/DashNav/DashNav";
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'

import BoringUser from "./DashboardComponents/BoringUser/BoringUser";

import HeaderMainSort from "./HeaderMainSort/HeaderMainSort";

// GQL
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_PROFILE } from '../../graphql/queries/Users';
// import { toIdValue } from 'apollo-utilities';
// import { InMemoryCache } from 'apollo-cache-inmemory';



const Dashboard = () => {
    // Change these array values if you need to change the name of the dashnav tabs
    let possibleDashNavTabs = ["Project Admin", "Student", "Trade Master", "Donations"];
    const [ dashNavTabState, setDashNavTab ] = useState({ selectedDashNavTab: null, dashTabs: [], dashTabCount: null, });

    // Change these values to adjust the names of the tabs in the main view.
    let possibleMainTabs = {
        projectAdminTabs: ["Applicants", "Students", "Trade Masters", "Trades", "Analytics"],
        studentTabs: ["Tasks", "Team"],
        tradeMasterTabs: ["Applicants", "Students", "Tasks", "Analytics"],
        donationTabs: ["All Donations", "Project Donations"],
    };
    const [ mainTabs, setMainTabs ] = useState({ ...possibleMainTabs, selectedMainTab: "" });

    const [ selectedProject, setProject ] = useState({ project: null, id: null, showMore: false, buttonToggle: false });

    

    // This useQuery pulls in tons of data and can pull more! See graphql/queries to adjust what it pulls in
    const { loading, error, data, refetch } = useQuery( GET_USER_PROFILE );
    // console.log("data: ", data);



    // const cache = new InMemoryCache({
    //     cacheRedirects: {
    //         Query: {
    //             me: (_, args) => toIdValue(cache.config.dataIdFromObject({ __typename: 'me', id: args.id })),
    //         },
    //     },
    // });

    const setCurrentProject = object => setProject(object);

    // The following 2 functions and useEffect deal with determining what dash nav options should be shown based
    // on what the user has available to them in the useQuery data. This piece of logic could probably be written
    // more efficiently.
    const setAvailableDashNavTabs = (newAvailTabArray, howMany) => {
        setDashNavTab({ ...dashNavTabState, selectedDashNavTab: newAvailTabArray[0], dashTabs: newAvailTabArray, dashTabCount: howMany })
    };
    
    const selectDashNavTab = userSelectedTab => {
        setMainTabs({ ...mainTabs, selectedMainTab: "" });
        setProject({ project: null, id: null, showMore: false, buttonToggle: false });
        setDashNavTab({ ...dashNavTabState, selectedDashNavTab: userSelectedTab });
    };


    

    useEffect(() => {
        // refetch();
        let availDashTabs = [];
        let count = "";
        count = data ? data.me.projects.length > 0 ? availDashTabs.push(possibleDashNavTabs[0]) : null : null;
        count = data ? data.me.studentProjects.length > 0 ? availDashTabs.push(possibleDashNavTabs[1]) : null : null;
        count = data ? data.me.tradeMasterProjects.length > 0 ? availDashTabs.push(possibleDashNavTabs[2]) : null : null;
        count = data ? data.me.donations.length > 0 ? availDashTabs.push(possibleDashNavTabs[3]) : null : null;

        setAvailableDashNavTabs(availDashTabs, count);
    }, [data]);

    if (loading) return <LoadingSpinner />;
    if (error) return <p>Error....</p>;



    return (
        <>
            {data.me.projects ? setAvailableDashNavTabs : null}
            <div className="dashboard-container" >
                <Nav />
                    <section className="dashboard">
                        <Sidebar
                            user={data.me}
                            project={selectedProject.project ? selectedProject.project : null}
                        />
                        <section className="dashboard-body">

                            {dashNavTabState.dashTabs.length <= 1 ? null : ( // Only renders the dash nav IF there are more than 1 categories
                                <DashNav
                                    selectDashNavTab={selectDashNavTab}
                                    dashTabs={dashNavTabState.dashTabs}
                                    selectedTab={dashNavTabState.selectedDashNavTab}
                                />
                            )}

                            { // Renders the header and main components for PROJECT ADMIN
                                data.me.projects && dashNavTabState.selectedDashNavTab === possibleDashNavTabs[0] ? (
                                    <HeaderMainSort
                                        projectArray={data.me.projects}     // <-- depending on view, this is what changes. This is the project array being sent
                                        selectedProject={selectedProject}   // --- These handle choosing a project to view
                                        setProject={setCurrentProject}          // -/

                                        mainTabs={mainTabs}                 // --- These handle display and selecting tabs in the main section depending on view
                                        setMainTabs={setMainTabs}           // -/
                                        possibleMainTabs={possibleMainTabs}   // <-- This an array of main tab options

                                        dashNavTabState={dashNavTabState}           // <-- This handles the potential dashnav
                                        possibleDashNavTabs={possibleDashNavTabs}   // <-- This an array of options for dash nav tabs
                                    />
                                ) : null
                            }

                            { // Renders the header and main components for STUDENT
                                data.me.studentProjects && dashNavTabState.selectedDashNavTab === possibleDashNavTabs[1] ? (
                                    <HeaderMainSort
                                        projectArray={data.me.studentProjects}
                                        selectedProject={selectedProject}
                                        setProject={setProject}

                                        mainTabs={mainTabs}
                                        setMainTabs={setMainTabs}
                                        possibleMainTabs={possibleMainTabs}

                                        dashNavTabState={dashNavTabState}
                                        possibleDashNavTabs={possibleDashNavTabs}
                                    />
                                ) : null
                            }


                            { // Renders the header and main components for TRADES MASTER
                                data.me.tradeMasterProjects && dashNavTabState.selectedDashNavTab === possibleDashNavTabs[2] ? (
                                    <HeaderMainSort
                                        projectArray={data.me.tradeMasterProjects}
                                        selectedProject={selectedProject}
                                        setProject={setProject}
                                        mainTabs={mainTabs}
                                        setMainTabs={setMainTabs}
                                        possibleMainTabs={possibleMainTabs}
                                        dashNavTabState={dashNavTabState}
                                        possibleDashNavTabs={possibleDashNavTabs}
                                    />
                                ) : null
                            }


                            { // Renders the header and main components for DONATIONS
                                data.me.donations && dashNavTabState.selectedDashNavTab === possibleDashNavTabs[3]  ? (
                                    <HeaderMainSort
                                        projectArray={data.me.donations}
                                        selectedProject={selectedProject}
                                        setProject={setProject}
                                        mainTabs={mainTabs}
                                        setMainTabs={setMainTabs}
                                        possibleMainTabs={possibleMainTabs}
                                        dashNavTabState={dashNavTabState}
                                        possibleDashNavTabs={possibleDashNavTabs}
                                    />


                                ) : null
                            }


                            { // User with no views. Push them to browse.  Not a student, tradesmaster, project admin, or donator
                                dashNavTabState.dashTabs.length === 0 ? (
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

export default Dashboard;
