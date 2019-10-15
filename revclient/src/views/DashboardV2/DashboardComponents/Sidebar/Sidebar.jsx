import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import styled from "styled-components";
import {  FaEnvelope, FaPhone, FaLocationArrow } from "react-icons/fa";
import Skeleton,  { SkeletonTheme } from "react-loading-skeleton";
import { InitialAvatar } from "../../../../helpers/InitialAvatar";
import ProgressBar, { calculatePercentageProgressBar } from "../../../../components/ProgressBar/ProgressBar";

import adminIcon from "../../../../assets/SidebarIcons/adminIcon.png";


const Sidebar = props => {
    const moneyProgress = [800, 1800]
    const getPercentage = calculatePercentageProgressBar(moneyProgress[0], moneyProgress[1]);

    console.log("props: ", props);

    const countArray = [
    {
        name: "admin",
        count: props.user.projects.length,
        icon: adminIcon
    }, 
    {
        name: "student",
        count: props.user.studentProjects.length,
        icon: adminIcon
    }, 
    {
        name: "master",
        count: props.user.tradeMasterProjects.length,
        icon: adminIcon
    }, 
    {
        name: "donor",
        count: props.user.donations.length,
        icon: adminIcon
    }]
    const displayCount = arr => {
        arr.forEach(x => {
            if(x.count > 0) {
                return (
                    <div className={x.name}>
                        <img src={x.icon} alt={`${x.name} icon`} />
                    </div>    
                )
            }
            else if(x.count > 1) {
                return (
                    <div className={x.name}>
                        <img src={x.icon} alt={`${x.name} icon`} />
                        <p className="count">{x.count}</p>
                    </div>
                )
            } 
        })
    }

    return (
        <section className="dashboard-sidebar section">
            <div className="sidebar-top">
                <Link to="/settings" origination="userDashboard"><h6>EDIT</h6></Link>
                {props.user.profileImage ? (
                    <img src={props.user.profileImage} alt="user" className="user-picture" />
                ) : (
                    <InitialAvatar 
                        firstName={props.user.firstName} 
                        lastName={props.user.lastName}
                        height="164" 
                        width="164" 
                        useRandomColor={1}
                    />
                )}
                {props.user.firstName ? (
                    <>
                        <h3>{`${props.user.firstName} ${props.user.lastName}`}</h3>
                    </>
                ) : (
                    <Skeleton count={2} />
                )}
            </div>
            <div className="dashboard-stats">
                {
                    <>
                        {props.user.projects && props.user.projects.length > 0 ? (
                        <div className="quick-stat">
                            <h3>{props.user.projects.length}</h3>
                                <p>{props.user.projects.length === 1 ? "Project" : "Projects"}</p>
                            </div>    
                        ) : null}
                        
                        {props.user.donations && props.user.donations.length > 0 ? (
                        <div className="quick-stat">
                            <h3>{props.user.donations.length}</h3>
                                <p>{props.user.donations.length === 1 ? "Donation" : "Donations"}</p>
                            </div>    
                        ) : null}

                        {props.user.certifications && props.user.certifications.length > 0 ? (
                        <div className="quick-stat">
                            <h3>{props.user.certifications.length}</h3>
                                <p>{props.user.certifications.length === 1 ? "Certificate" : "Certificates"}</p>
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
                        <div className="info progress-bar-container">
                            <div className="text">
                                <p>Project Completion</p>
                                <p className="percent">{getPercentage}</p>
                            </div>
                            <ProgressBar progress={moneyProgress[0]} startingPoint={moneyProgress[1]} />
                        </div>
                        <div className="info">
                            <div className="text">
                                <p>Email</p>
                                <span>{props.user.email}</span>
                            </div>
                            <Link to="#">
                                <div className="sidebar-icon-container">
                                    <FaEnvelope className="sidebar-icon" />
                                </div>
                            </Link>
                        </div>
                        
                        {props.user.phoneNumber && (
                            <div className="info">
                                <div className="text">
                                    <p>Phone Number</p>
                                    <span>{props.user.phoneNumber}</span>
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
                                <span>{`${props.user.city}, ${props.user.state}`}</span>
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
                        displayCount(countArray)   
                    }
                    {/* {props.user.achievements
                        ? props.user.achievements.map(a => (
                            <div className="achievement" key={a.name + Date.now()}>
                                <Link to="#">
                                    <img src={a.image} alt={`${a.name} achievement`} className="a-icon"/>
                                </Link>
                                <div className="number">
                                    { a.number < 31
                                        ? `${a.number}`
                                        : `30+`
                                    }
                                </div>
                            </div>
                        ))
                        :
                        <>
                            <Skeleton circle={true} height={63} width={63} />
                            <Skeleton circle={true} height={63} width={63} />
                            <Skeleton circle={true} height={63} width={63} />
                            <Skeleton circle={true} height={63} width={63} />
                        </>
                    } */}
                </div>
            </div>
        </section>
    );
};

export default Sidebar;