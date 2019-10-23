import React from 'react';

const Tab = props => {
    const { mainTabs, setMainTabs, tab } = props;
    
    return (
        <div 
            className={tab === mainTabs.selectedMainTab ? 'tab active-tab': 'tab'}
            // onClick={() => props.changeSelected(props.tab)}
            // onClick={() => props.setSelected(props.tab)}
            onClick={() => setMainTabs({ ...mainTabs, selectedMainTab: tab })}
        >
            {tab}
        </div>
    );
};

export default Tab;