import React from 'react';

import List from './List';

const Lists = props => {
    return (
        <div className="lists">
            {props.lists.map(list => {
                return <List list={list} key={list.name+Date.now()}/>
            })}
        </div>
    );
};

export default Lists;