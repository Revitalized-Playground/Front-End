import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import styled from "styled-components";
import {  FaEnvelope, FaPhone, FaLocationArrow } from "react-icons/fa";
import Skeleton,  { SkeletonTheme } from "react-loading-skeleton";
import { InitialAvatar } from "../../../../helpers/InitialAvatar";
import { addUpDonations } from "../../../../helpers/helpers";

import ProgressBar, { calculatePercentageProgressBar } from "../../../../components/ProgressBar/ProgressBar";

import adminIcon from "../../../../assets/SidebarIcons/adminIcon.png";
import apprenticeIcon from "../../../../assets/SidebarIcons/apprenticeIcon.png";
import masterIcon from "../../../../assets/SidebarIcons/masterIcon.png";
import donorIcon from "../../../../assets/SidebarIcons/donorIcon.png";

const Sidebar = props => {
    const { user, project } = props;

    
    const countArray = [
    {
        name: "admin",
        count: user.projects.length,
        icon: adminIcon
    }, 
    {
        name: "student",
        count: user.studentProjects.length,
        icon: apprenticeIcon
    }, 
    {
        name: "master",
        count: user.tradeMasterProjects.length,
        icon: masterIcon
    }, 
    {
        name: "donor",
        count: user.donations.length,
        icon: donorIcon
    }]

    let totalAchievements = countArray[0].count+countArray[1].count+countArray[2].count+countArray[3].count;

    const displayCount = x => {
        if(x.count > 0) {
            return (
                <div className={x.name}>
                    <img src={x.icon} alt={`${x.name} icon`} />
                    {
                        x.count > 1 
                        ? x.count < 31
                        ? <p className="count">{x.count}</p>
                        : <p className="count">30+</p>
                        : null
                    }
                </div> 
            )    
        }
    }
    
    // console.log("slected project in sidebar",project, props);
    
    return (
        <section className="dashboard-sidebar section">
            <div className="sidebar-top">
                <Link to="/settings" origination="userDashboard"><h6>EDIT</h6></Link>
                {user.profileImage ? (
                    <img src={user.profileImage} alt="user" className="user-picture" />
                ) : (
                    <InitialAvatar 
                        firstName={user.firstName} 
                        lastName={user.lastName}
                        height="164" 
                        width="164" 
                        useRandomColor={1}
                    />
                )}
                {user.firstName ? (
                    <>
                        <h3>{`${user.firstName} ${user.lastName}`}</h3>
                    </>
                ) : (
                    <Skeleton count={2} />
                )}
            </div>
            <div className="dashboard-stats">
                {
                    <>
                        {user.projects && user.projects.length > 0 ? (
                        <div className="quick-stat">
                            <h3>{user.projects.length}</h3>
                                <p>{user.projects.length === 1 ? "Project" : "Projects"}</p>
                            </div>    
                        ) : null}
                        
                        {user.donations && user.donations.length > 0 ? (
                        <div className="quick-stat">
                            <h3>{user.donations.length}</h3>
                                <p>{user.donations.length === 1 ? "Donation" : "Donations"}</p>
                            </div>    
                        ) : null}

                        {user.certifications && user.certifications.length > 0 ? (
                        <div className="quick-stat">
                            <h3>{user.certifications.length}</h3>
                                <p>{user.certifications.length === 1 ? "Certificate" : "Certificates"}</p>
                            </div>    
                        ) : null}
                    </>
                    ||
                    <>
                        <Skeleton count={1} height={25} width={200} />
                        <Skeleton count={1} height={25} width={125} />
                        <Skeleton count={1} height={25} width={75} />
                    </>
                }
            </div>
            <hr/>
            <div className="info-container">
                {
                    <>
                        {project ? (
                            <div className="info progress-bar-container">
                                <div className="text">
                                    <h4>{project.name}</h4>
                                </div>
                                <div className="text">
                                    <p>Project Completion</p>
                                    <p className="percent">
                                        {calculatePercentageProgressBar(project.goalAmount, addUpDonations(project.donations))}
                                    </p>
                                </div>
                                <ProgressBar 
                                    progress={addUpDonations(project.donations)} 
                                    startingPoint={project.goalAmount} 
                                />
                            </div>
                        ) : null}
                        
                        <div className="info">
                            <div className="text">
                                <p>Email</p>
                                <span>{user.email}</span>
                            </div>
                            <Link to="#">
                                <div className="sidebar-icon-container">
                                    <FaEnvelope className="sidebar-icon" />
                                </div>
                            </Link>
                        </div>
                        
                        {user.phoneNumber && (
                            <div className="info">
                                <div className="text">
                                    <p>Phone Number</p>
                                    <span>{user.phoneNumber}</span>
                                </div>
                                <Link to="#">
                                    <div className="sidebar-icon-container">
                                        <FaPhone className="sidebar-icon" />
                                    </div>
                                </Link>
                            </div>
                        )}

                        <div className="info">
                            <div className="text">
                                <p>Location</p>
                                <span>{`${user.city}, ${user.state}`}</span>
                            </div>
                            <HashLink to="/#search-map">
                                <div className="sidebar-icon-container">
                                    <FaLocationArrow className="sidebar-icon" />
                                </div>
                            </HashLink>
                        </div>
                    </>
                    ||
                    <SkeletonTheme>
                        <Skeleton count={5} duration={100} />
                    </SkeletonTheme>
                }
            </div>
            <hr/>
            <div className="dashboard-sidebar-footer">
                <h5>Achievements</h5>
                <div className="a-container">
                    {
                        totalAchievements === 0
                        ?
                            <p>
                                You currently have no achievements.
                                Look <NavLink to="/browse">here</NavLink> for projects to join,
                                or <NavLink to="/createproject">create a project</NavLink>!
                            </p>
                        :
                            countArray.map(y => {
                                return (
                                    <React.Fragment key={y.name+Math.random()}>
                                        {displayCount(y)}
                                    </React.Fragment>
                                )
                            })
                    }
                </div>
            </div>
        </section>
    );
};

export default Sidebar;