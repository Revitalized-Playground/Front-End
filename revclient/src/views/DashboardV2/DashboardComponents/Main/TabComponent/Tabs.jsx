import React from 'react';

import Tab from './Tab';

const Tabs = props => {
    const { tabs } = props;

    return (
        <div className="tabs">
            {
                tabs.map(tab => (
                    <Tab changeSelected={props.changeSelected} selected={props.selected} tab={tab} key={tab + Date.now()} />
                ))
            }
        </div>
    );
};

export default Tabs;