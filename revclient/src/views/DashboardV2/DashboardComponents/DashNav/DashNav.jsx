import React from 'react';


const DashNav = props => {

    return (
        <section className="dashboard-dash-nav section" onClick={() => props.changeSelected("")}>
            {props.tabs && props.tabs.map(tab => (
                <React.Fragment key={tab+Math.random()}>
                    <h5 
                        onClick={(e) => {e.stopPropagation();props.changeSelected(tab)}}
                        className={props.selectedTab === tab ? 'tab active-tab': 'tab'}
                    >{tab}</h5>
                </React.Fragment>
            )) }
        </section>
    )
};


export default DashNav;

