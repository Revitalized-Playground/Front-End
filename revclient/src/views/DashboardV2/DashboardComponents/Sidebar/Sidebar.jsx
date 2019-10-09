import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import styled from "styled-components";
import { FaVideo, FaEnvelope, FaPhone, FaLocationArrow } from "react-icons/fa";
import Skeleton,  { SkeletonTheme } from "react-loading-skeleton";
import { InitialAvatar } from "../../../../helpers/InitialAvatar";
import ProgressBar, { calculatePercentageProgressBar } from "../../../../helpers/ProgressBar";


const Sidebar = props => {
    const moneyProgress = [100, 1800]
    const getPercentage = calculatePercentageProgressBar(moneyProgress[0], moneyProgress[1]);


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
                                <p>Overall progress of project</p>
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