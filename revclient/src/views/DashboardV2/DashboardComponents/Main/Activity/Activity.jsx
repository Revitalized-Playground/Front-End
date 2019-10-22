import React from 'react';


const Activity = props => {

    if (props.tab === 'Activity Feed') {
        return (
            <>
                <div className="item activity" key={props.task.name + Date.now()}>

                    <div className="item-activity-container">
                        
                        <div className="item-activity-category">{props.task.left}</div>
                        
                        <div className="item-activity-body">
                            
                            {props.task.image ? (
                                <div className="item-activity-img-container">
                                    <img src={props.task.image} alt="" />
                                </div>
                            ) : (
                                <div className="display-none"></div>
                            )}

                            <div className="text">
                                <h5>{props.task.name}</h5>
                                <p className="description">{props.task.description}</p>
                                <p className="comment">{props.task.comment}</p>
                            </div>
                        
                            <div className="item-activity-date">
                                <p>{props.task.right}</p>
                            </div>						
                        </div>

                    </div>
                </div>
            </>
        )
    }
    
}


export default Activity;

