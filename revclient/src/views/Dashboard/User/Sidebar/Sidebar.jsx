import React from 'react';
import { Link } from 'react-router-dom';
// import styled from "styled-components";
import Skeleton,  { SkeletonTheme } from "react-loading-skeleton";

const Sidebar = props => {
    
    // const Box = styled.div`
    //     height: 12px;
    //     background: #0B096F;
    //     border-radius: 50px;

    //     @keyframes pulse {
    //         0% {
    //             width: 0;
    //             background: #0B096F;
    //             }
    //         100% {
    //             width: ${card.amountFunded > card.goalAmount ? 100 : (Number(card.amountFunded) / Number(card.goalAmount) * 100)}%;

    //         }
    //     }
    //     width: ${card.amountFunded > card.goalAmount ? 100 : (Number(card.amountFunded) / Number(card.goalAmount) * 100)}%;
    //     animation: 1s ease-out pulse;
    // `

    return (
        <section className="user-dashboard-sidebar section">
            <div className="sidebar-top">
                <Link to="#"><h6>EDIT</h6></Link>
                {
                    <img src={props.user.profileImage} alt="user" className="user-picture" />
                    ||
                    <Skeleton circle={true} height={110} width={110} />
                }
                {
                    <>
                        <h3>{`${props.user.firstName} ${props.user.lastName}`}</h3>
                        <p>{props.user.handle}</p>
                    </>
                    ||
                    <Skeleton count={2} />
                }
            </div>
            <div className="user-dashboard-stats">
                {
                    <>
                        <div className="quick-stat">
                            <h4>{props.user.certifications}</h4>
                            <p>Certifications</p>
                        </div>
                        <div className="quick-stat">
                            <h4>{props.user.hoursLogged}</h4>
                            <p>Hours Logged</p>
                        </div>
                        <div className="quick-stat">
                            <h4>{props.user.creditHours}</h4>
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
                            <Link to="#"><img 
                                src="https://res.cloudinary.com/revitalize/image/upload/v1569861722/user%20dashboard/Zoom_dzderj.svg" 
                                alt="zoom icon" 
                                className="icon"
                            /></Link>
                        </div>
                        <div className="info">
                            <div className="text">
                                <p>Email</p>
                                <span>{props.user.email}</span>
                            </div>
                            <Link to="#"><img 
                                src="https://res.cloudinary.com/revitalize/image/upload/v1569861717/user%20dashboard/Email_o1fyfc.svg" 
                                alt="email icon" 
                                className="icon"
                            /></Link>
                        </div>
                        <div className="info">
                            <div className="text">
                                <p>Phone Number</p>
                                <span>{props.user.phoneNumber}</span>
                            </div>
                            <Link to="#"><img 
                                src="https://res.cloudinary.com/revitalize/image/upload/v1569861721/user%20dashboard/Telephone_kel6du.svg" 
                                alt="phone icon" 
                                className="icon"
                            /></Link>
                        </div>
                        <div className="info">
                            <div className="text">
                                <p>Location</p>
                                <span>{`${props.user.city}, ${props.user.state}`}</span>
                            </div>
                            <Link to="#"><img 
                                src="https://res.cloudinary.com/revitalize/image/upload/v1569861716/user%20dashboard/Location_Bubble_bwgq6m.svg" 
                                alt="location icon" 
                                className="icon"
                            /></Link>
                        </div>
                    </>
                    ||
                    <SkeletonTheme>
                        <Skeleton count={5} duration={100} />
                    </SkeletonTheme>
                }
            </div>
            <hr/>
            <div className="user-dashboard-sidebar-footer">
                <h4>Achievements</h4>
                <div className="a-container">
                    {
                        props.user.achievements.map(a => (
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
                        ||
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