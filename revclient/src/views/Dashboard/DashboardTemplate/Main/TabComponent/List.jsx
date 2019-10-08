import React, { useState } from 'react';

import AdminItem from './ItemTypes/AdminItem';
import ApprenticeItem from './ItemTypes/ApprenticeItem';
import MasterItem from './ItemTypes/MasterItem';

const List = props => {
    const [usertype, setUsertype] = useState('apprentice')
    
    return (
        <div className="list">
            {props.list.map(item => {
                switch(usertype) {
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