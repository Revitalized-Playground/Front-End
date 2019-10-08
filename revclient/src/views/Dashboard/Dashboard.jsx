import React from 'react'


import Nav from '../../components/Layout/Nav';

import Footer from "../../components/Layout/Footer";
import DashboardTemplate from './DashboardTemplate/DashboardTemplate';

import { useQuery } from '@apollo/react-hooks';
import { GET_USER } from '../../graphql/queries/Users';

import { users, projects, defaultTab, tabs, list } from './dashboarddummydata';

export default function Dashboard() {
    
    const { loading, error, data } = useQuery(GET_USER);
    
    if (loading) return <p>loading....</p>;
    if (error) return <p>Error....</p>;

    return (
        <>

            <div className="dashboard-container" >
                <Nav />
                <DashboardTemplate 
                    user={data.me}
                    projects={projects}
                    defaultTab={defaultTab}
                    tabs={tabs}
                    list={list}
                />
                <Footer />
            </div>

        </>
    )
}
 