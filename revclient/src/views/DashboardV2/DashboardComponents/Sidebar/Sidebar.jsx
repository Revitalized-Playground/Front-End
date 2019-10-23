import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
        name: "Admin Projects",
        count: user.projects.length,
        icon: adminIcon
    },
    {
        name: "Student Projects",
        count: user.studentProjects.length,
        icon: apprenticeIcon
    },
    {
        name: "Master Projects",
        count: user.tradeMasterProjects.length,
        icon: masterIcon
    },
    {
        name: "Donations",
        count: user.donations.length,
        icon: donorIcon
    }]

    let totalAchievements = countArray[0].count+countArray[1].count+countArray[2].count+countArray[3].count;

    const displayCount = x => {
        if(x.count > 0) {
            return (
                <div className="figure">
                    <p className="overlay">{x.name}</p>
                    <div className="empty"></div>
                    <img src={x.icon} alt={`${x.name} icon`} />
                    {
                        x.count < 31
                        ? <p className="count">{x.count}</p>
                        : <p className="count">30+</p>
                    }
                </div>
            )
        }
    }

    return (
        <section className="dashboard-sidebar section">
            <div className="dashboard-section-inner-container " >


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

                        <div className="a-container">
                        {
                            totalAchievements === 0
                            ?
                                <p>
                                    You currently have no achievements.
                                    Look <NavLink to="/projects">here</NavLink> for projects to join,
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
                                    <p>Email</p>
                                    <span>{user.email}</span>
                                </div>
                                <a href={`mailto: ${user.email}`}>
                                    <div className="sidebar-icon-container">
                                        <FaEnvelope className="sidebar-icon" />
                                    </div>
                                </a>
                            </div>

                            {user.phoneNumber && (
                                <div className="info">
                                    <div className="text">
                                        <p>Phone Number</p>
                                        <span>{user.phoneNumber}</span>
                                    </div>
                                    <Link to="">
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
                            {project ? (
                                <>
                                    <hr/>
                                    <div className="info project-details-container">
                                        <div className="text">
                                            <Link to={`/project/${project.slug}`} >
                                                <h4>{project.name}</h4>
                                            </Link>
                                        </div>
                                        {project.donations && (
                                            <div className="text">
                                                <p>Donations</p>
                                                <p className="text-value">
                                                    {project.donations.length}
                                                </p>
                                            </div>
                                        )}
                                        {project.applicants && (
                                            <div className="text">
                                                <p>Applicants</p>
                                                <p className="text-value">
                                                    {project.applicants.length}
                                                </p>
                                            </div>
                                        )}
                                        {project.students && (
                                            <div className="text">
                                                <p>Students</p>
                                                <p className="text-value">
                                                    {project.students.length}
                                                </p>
                                            </div>
                                        )}
                                        {project.tradeMasters && (
                                            <div className="text">
                                                <p>Trade Masters</p>
                                                <p className="text-value">
                                                    {project.tradeMasters.length}
                                                </p>
                                            </div>
                                        )}
                                        {project.trades && (
                                            <div className="text">
                                                <p>Trades</p>
                                                <p className="text-value">
                                                    {project.trades.length}
                                                </p>
                                            </div>
                                        )}
                                        {project.tasks && (
                                            <div className="text">
                                                <p>Tasks</p>
                                                <p className="text-value">
                                                    {project.tasks.length}
                                                </p>
                                            </div>
                                        )}
                                        <div className="text">
                                            <p>Percentage Funded</p>
                                            <p className="text-value">
                                                {calculatePercentageProgressBar(project.goalAmount, addUpDonations(project.donations))}
                                            </p>
                                        </div>
                                        <ProgressBar
                                            progress={addUpDonations(project.donations)}
                                            startingPoint={project.goalAmount}
                                        />
                                    </div>
                                </>
                            ) : null}

                        </>
                        ||
                        <SkeletonTheme>
                            <Skeleton count={5} duration={100} />
                        </SkeletonTheme>
                    }
                </div>

            </div>
        </section>
    );
};

export default Sidebar;