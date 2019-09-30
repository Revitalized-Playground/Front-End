import React from 'react';
import Skeleton,  { SkeletonTheme } from "react-loading-skeleton";

const Sidebar = props => {
    

    console.log(props.user);

    return (
        <section className="user-dashboard-sidebar section">
            {
                <img src={props.user.profileImage} alt="user" />
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
                        <div className="progress">
                            <p>Overall progress of project</p>
                            <span>progress bar here</span>
                        </div>
                        <div className="info">
                            <div className="text">
                                <p>Zoom</p>
                                <span>{props.user.zoom}</span>
                            </div>
                            <div className="icon">zoom icon</div>
                        </div>
                        <div className="info">
                            <div className="text">
                                <p>Email</p>
                                <span>{props.user.email}</span>
                            </div>
                            <div className="icon">email icon</div>
                        </div>
                        <div className="info">
                            <div className="text">
                                <p>Phone Number</p>
                                <span>{props.user.phoneNumber}</span>
                            </div>
                            <div className="icon">phone icon</div>
                        </div>
                        <div className="info">
                            <div className="text">
                                <p>Location</p>
                                <span>{`${props.user.city}, ${props.user.state}`}</span>
                            </div>
                            <div className="icon">location icon</div>
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
                {
                    props.user.achievements.map(a => (
                        <div className="achievement">
                            <img src={a.image} alt={`${a.name} achievement`} className="a-icon"/>
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
        </section>
    );
};

export default Sidebar;