import React from 'react'

import Nav from "../../components/Layout/Nav";
import UserDashboard from "./User/UserDashboard";
import Footer from "../../components/Layout/Footer";


export default function Dashboard() {
    return (
        <>
            <Nav />
                <div className="dashboard-container" >
                    <UserDashboard />
                </div>
            <Footer />
        </>
    )
}
 