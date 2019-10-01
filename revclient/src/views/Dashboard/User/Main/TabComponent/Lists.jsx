import React from 'react';

import List from './List';

const Lists = props => {
    console.log("props.lists: ", props.lists);
    return (
        <div className="lists">
            {props.lists.map(list => (
                <List list={list} />
            ))}
        </div>
    );
};

export default Lists;