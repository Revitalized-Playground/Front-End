/**
 * * Description of component
 * TODO: things to do
 * @props description 
 */

import React from 'react'

import UserNav from "../../components/Layout/UserNav";
import UserDashboard from "./User/UserDashboard";
import Footer from "../../components/Layout/Footer";


export default function Dashboard() {
    return (
        <>
            <div className="dashboard-container" >
                <UserNav />
                <UserDashboard />
                <Footer />
            </div>
        </>
    )
}
 