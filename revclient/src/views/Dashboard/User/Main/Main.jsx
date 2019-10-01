import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import { tabs, lists } from './dummydata';

const Main = () => {
    

    const [list, setList] = useState({
        // one: true,
        // two: false,
        // three: false,
        // four: false
        list: "list1"
    })

    console.log(list);

    return (
        <div className="user-dashboard-main section">
            <div className="user-dashboard-title">
                {
                    tabs.map(t => (
                        <h3 
                            className="tab"
                            key={t+Date.now()}
                            value={t}
                            onClick={e => {
                                console.log(e.target);
                                setList(e.target.value)
                            }}
                        >{t}</h3>
                    ))
                    ||
                    <>
                        <Skeleton count={1} height={25} width={200} />
                        <Skeleton count={1} height={25} width={200} />
                        <Skeleton count={1} height={25} width={200} />
                        <Skeleton count={1} height={25} width={200} />
                    </>
                }
            </div>

            <hr />
            <div className="user-dashboard-main-body">
                {
                    // list1.map(d => (
                    //     <div className="div" key={d.name + Date.now()}>
                    //         <div className="left">{d.left}</div>
                    //         <img src={d.image} alt={d.name} className="icon-image"/>
                    //         <div className="text">
                    //             <h4>{d.name}</h4>
                    //             <p className="p-one">{d.description}</p>
                    //             <p className="p-two">{d.comment}</p>
                    //         </div>
                    //         <div className="right">{d.right}</div>
                    //     </div>
                    // ))
                    // ||
                    <Skeleton count={5} height={125} />
                }
            </div>
        </div>
    );
};

export default Main;