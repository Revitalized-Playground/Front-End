import React from 'react'

<<<<<<< HEAD
import Nav from '../../components/Layout/Nav';
=======
import Nav from "../../components/Layout/Nav";
>>>>>>> 937e75dae43d688becd3cd19c7ec70126c22c129
import UserDashboard from "./User/UserDashboard";
import Footer from "../../components/Layout/Footer";


export default function Dashboard() {
    return (
        <>

            <div className="dashboard-container" >
                <Nav />
                <UserDashboard />
                <Footer />
            </div>

        </>
    )
}
 