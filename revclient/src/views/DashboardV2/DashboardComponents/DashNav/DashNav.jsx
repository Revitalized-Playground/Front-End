import React from 'react';


const DashNav = props => {
    const { selectDashNavTab, dashTabs, selectedTab } = props;

    return (
        <section className="dash-nav  section" onClick={() => selectDashNavTab("")}>
            {dashTabs && dashTabs.map(tab => (
                <React.Fragment key={tab+Math.random()}>
                    <h5 
                        onClick={(event) => {event.stopPropagation(); selectDashNavTab(tab)}}
                        className={selectedTab === tab ? 'tab active-tab': 'tab'}
                    >{tab}</h5>
                </React.Fragment>
            )) }
        </section>
    )
};


export default DashNav;

