import React from 'react';


const DashNav = props => {
    const { selectDashNavTab, dashTabs, selectedTab } = props;

    return (
        <section className="dash-nav  section" >
            {dashTabs && dashTabs.map(tab => (
                <React.Fragment key={tab+Math.random()}>
                    <h5 
                        onClick={() => selectDashNavTab(tab)}
                        className={selectedTab === tab ? 'tab active-tab': 'tab'}
                    >{tab}</h5>
                </React.Fragment>
            )) }
        </section>
    )
};


export default DashNav;

