/**
 * * Description of component
 * TODO: things to do
 * @props description 
 */

import React from 'react'

import UserNav from "../../components/Layout/UserNav";
import UserDashboard from "./User/UserDashboard";


export default function Dashboard() {
    return (
        <>
            <UserNav />
            <UserDashboard />
        </>
    )
}
 