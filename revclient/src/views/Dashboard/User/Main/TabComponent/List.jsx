import React from 'react';

const List = props => {
    
    console.log("List props: ", props);

    return (
        <>
        {props.list.map(eachList => (
            <div className="list" key={eachList.name + Date.now()}>
                <div className="left">{eachList.left}</div>
                <img src={eachList.image} alt="" />
                <div className="text">
                    <h2>{eachList.name}</h2>
                    <p className="description">{eachList.description}</p>
                    <p className="comment">{eachList.comment}</p>
                </div>
                <div className="right">{eachList.right}</div>
            </div>
        ))}
        </>
    );
};

export default List;