import React from 'react';
import Task from './Task';

const Tasks = props => {
    // console.log("Props in List", props)
    return (
        <div className="list">
            {props.tasks.map(task => {
                return <Task task={task} key={task.id+Date.now()} tab={props.tab} />
            })}
        </div>
    );
};

export default Tasks;