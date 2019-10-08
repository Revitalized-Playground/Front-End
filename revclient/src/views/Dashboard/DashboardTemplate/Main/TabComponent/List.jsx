import React from 'react';

import AdminItem from './ItemTypes/AdminItem';
import ApprenticeItem from './ItemTypes/ApprenticeItem';
import MasterItem from './ItemTypes/MasterItem';

const List = props => {    
    return (
        <div className="list">
            {props.list.map(item => {
                switch(props.usertype) {
                    default:
                        return <ApprenticeItem item={item} key={item.name+Date.now()}/>;
                    case 'apprentice':
                        return <ApprenticeItem item={item} key={item.name+Date.now()}/>;
                    case 'admin':
                        return <AdminItem item={item} key={item.name+Date.now()}/>;
                    case 'master':
                        return <MasterItem item={item} key={item.name+Date.now()}/>;
                }
            })}
        </div>
    );
};

export default List;