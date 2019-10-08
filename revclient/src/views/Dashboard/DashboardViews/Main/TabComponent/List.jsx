import React from 'react';
import Item from './Item';

const List = props => {
    return (
        <div className="list">
            {props.list.map(item => {
                return <Item item={item} key={item.name+Date.now()}/>
            })}
        </div>
    );
};

export default List;