import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import styled from "styled-components";
import { FaVideo, FaEnvelope, FaPhone, FaLocationArrow } from "react-icons/fa";
import Skeleton,  { SkeletonTheme } from "react-loading-skeleton";
import { InitialAvatar } from "../../../../helpers/InitialAvatar";


const Sidebar = props => {
    
    return (
        <section className="dashboard-sidebar section">
            <div className="sidebar-top">
                <Link to="/settings" origination="userDashboard"><h6>EDIT</h6></Link>
                {props.user.profileImage ? (
                    <img src={props.user.profileImage} alt="user" className="user-picture" />
                ) : (
                    // <Skeleton circle={true} height={110} width={110} />
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
                        {/* <p>{props.user.email}</p> */}
                    </>
                ) : (
                    <Skeleton count={2} />
                )}
            </div>
            <div className="dashboard-stats">
                {
                    <>
                        <div className="quick-stat">
                            <h3>{props.user.certifications}</h3>
                            <p>Certifications</p>
                        </div>
                        <div className="quick-stat">
                            <h3>{props.user.hoursLogged}</h3>
                            <p>Hours Logged</p>
                        </div>
                        <div className="quick-stat">
                            <h3>{props.user.creditHours}</h3>
                            <p>Credit Hours</p>
                        </div>
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
                        <div className="info">
                            <div className="text">
                                <p>Overall progress of project</p>
                                {/* <Box /> */}
                                <span>progress bar here</span>
                            </div>
                            <p className="percent">22%</p>
                        </div>
                        <div className="info">
                            <div className="text">
                                <p>Zoom</p>
                                <span>{props.user.zoom}</span>
                            </div>
                            <Link to="#">
                                <div className="sidebar-icon-container">
                                    <FaVideo className="sidebar-icon" />
                                </div>
                            </Link>
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
                {/* {if(props.user.apprentice) {

                } else if(props.user.master) {

                }} */}
                <h5>Achievements</h5>
                <div className="a-container">
                    {props.user.achievements
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
                    }
                </div>
                <Link to="#">View All...</Link>
            </div>
        </section>
    );
};

export default Sidebar;