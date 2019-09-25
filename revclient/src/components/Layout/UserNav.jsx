import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import userProfileAvatarTest from "../../assets/LandingPage/Maxwell.png";

// Needs to receive the correct user information from a useQuery
// based on auth.
const UserNav = () => {

    const [user] = useState({ 
        firstName: "Frank"
    })

    return (

        <section className="user-nav">
            <div className="user-nav-logo">
                <Link to="/">
                    <FaArrowLeft />
                </Link>
            </div>
            <div className="user-nav-avatar">
                <span>
                    Welcome back, {user.firstName}
                </span>
                <img src={userProfileAvatarTest} alt="User profile avatar"/>

            </div>
        </section>

    );
}

export default UserNav;

