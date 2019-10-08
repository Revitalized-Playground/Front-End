import React, { useState } from 'react'

import Nav from '../../components/Layout/Nav';

import Footer from "../../components/Layout/Footer";
import DashboardTemplate from './DashboardTemplate/DashboardTemplate';

import { useQuery } from '@apollo/react-hooks';
import { GET_USER } from '../../graphql/queries/Users';

import { projectList, defaultApprenticeTab, apprenticeTabs, apprenticeList } from './dashboarddummydata';


export default function Dashboard() {
    
    const [state, setState] = useState({
        usertype: 'apprentice',
        projects: projectList,
        defaultTab: defaultApprenticeTab,
        tabs: apprenticeTabs,
        list: apprenticeList
    })
    const { loading, error, data } = useQuery(GET_USER);
    
    const someQueryFunction = () => {
        setState({
            usertype: '',
            projects: '',
            defaultTab: '',
            tabs: '',
            list: ''
        })
    }
    if(true === false) {
        someQueryFunction();
    }
    if (loading) return <p>loading....</p>;
    if (error) return <p>Error....</p>;

    return (
        <>
            <div className="dashboard-container" >
                <Nav />
                <DashboardTemplate 
                    user={data.me}
                    usertype={state.usertype}
                    projects={state.projects}
                    defaultTab={state.defaultTab}
                    tabs={state.tabs}
                    list={state.list}
                />
                <Footer />
            </div>
        </>
    )
}
 