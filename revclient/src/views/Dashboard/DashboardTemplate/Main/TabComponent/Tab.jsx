import React from 'react';

const Tab = props => {
    return (
        <div 
            className={props.tab === props.selected ? 'tab active-tab': 'tab'}
            onClick={() => props.changeSelected(props.tab)}
        >
            {props.tab}
        </div>
    );
};

export default Tab;