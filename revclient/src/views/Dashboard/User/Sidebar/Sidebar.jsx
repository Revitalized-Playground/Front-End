import React from 'react';
import Skeleton,  { SkeletonTheme } from "react-loading-skeleton";

const Sidebar = props => {
    return (
        <section className="user-dashboard-sidebar section">
            {
                <img src="" alt="user" />
                ||
                <Skeleton circle={true} height={110} width={110} />
            }

            <Skeleton count={2} />
            <div className="user-dashboard-title">
                    <Skeleton count={1} height={25} width={200} />
                    <Skeleton count={1} height={25} width={125} />
                    <Skeleton count={1} height={25} width={75} /> 
            </div>

            <hr/>

            <SkeletonTheme color="#ffffff"  >
                <Skeleton count={15} duration={100} />
            </SkeletonTheme>

            <hr/>

            <div className="user-dashboard-sidebar-footer">
                <Skeleton circle={true} height={63} width={63} />
                <Skeleton circle={true} height={63} width={63} />
                <Skeleton circle={true} height={63} width={63} />
                <Skeleton circle={true} height={63} width={63} />
            </div>
        </section>
    );
};

export default Sidebar;