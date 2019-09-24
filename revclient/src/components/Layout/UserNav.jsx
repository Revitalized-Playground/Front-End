import React, { useState } from 'react';
import userProfileAvatarTest from "../../assets/LandingPage/Maxwell.png";


const UserNav = () => {

    const [user] = useState({ 
        firstName: "Frank"
    })
    console.log(user)
    return (

        <section className="user-nav">
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

