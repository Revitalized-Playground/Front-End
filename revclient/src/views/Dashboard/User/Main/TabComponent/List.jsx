import React from 'react';

const List = props => {
    
    console.log("List props: ", props);

    return (
        <>
            <div className="list" key={props.list.name + Date.now()}>
                <div className="left">{props.list.left}</div>
                <img src={props.list.image} alt="" />
                <div className="text">
                    <h2>{props.list.name}</h2>
                    <p className="description">{props.list.description}</p>
                    <p className="comment">{props.list.comment}</p>
                </div>
                <div className="right">{props.list.right}</div>
            </div>
        </>
    );
};

export default List;