import React, { useState } from 'react';
import { MdArrowBack, MdClose } from "react-icons/md";

import { useMutation } from "@apollo/react-hooks";
import { CREATE_PROJECT_TASK } from '../../../../../graphql/mutations';


const AddTask = props => {
    const {
        setAddTaskModal,
        projectId,
        // tradeId 
    } = props;

    const [ createProjectTask ] = useMutation( CREATE_PROJECT_TASK );
    const [ addTaskState, setAddTaskState ] = useState({
        project: projectId,
        // trade: tradeId,
        trade: "",
        description: "",
        priority: "",
        dueDate: "",
        budgetHours: "",
    })

    const submitAddTask = async event => {
        event.preventDefault();
		
        const created = await createProjectTask({ variables: { data: {
            ...addTaskState,
            budgetHours: Number(addTaskState.budgetHours),
        } } });

        setAddTaskState({ ...addTaskState, project: "", name: "", description: "" })
		setAddTaskModal({ show: false });
    };


    return (
        <>
            <section 
                className="add-task-container" 
            >
                <div className="add-task-card">
                    
                    <div className="add-task-actions">
                        <MdClose onClick={() => setAddTaskModal({ show: false })} />
                    </div>

                    <h3>Add Task</h3>
                    <form onSubmit={submitAddTask} >
                        <input 
                            name='description'
                            type='text'
                            placeholder='Description...'
                            value={addTaskState.description}
                            onChange={(event) => setAddTaskState({ ...addTaskState, [event.target.name]:event.target.value })}
                        />
                        <input 
                            name='trade'
                            type='text'
                            placeholder='Trade...'
                            value={addTaskState.trade}
                            onChange={(event) => setAddTaskState({ ...addTaskState, [event.target.name]:event.target.value })}
                        />
                        <input 
                            name='priority'
                            type='text'
                            placeholder='Priority...'
                            value={addTaskState.priority}
                            onChange={(event) => setAddTaskState({ ...addTaskState, [event.target.name]:event.target.value })}
                        />
                        <input 
                            name='dueDate'
                            type='date'
                            placeholder='Due date...'
                            value={addTaskState.dueDate}
                            onChange={(event) => setAddTaskState({ ...addTaskState, [event.target.name]:event.target.value })}
                        />
                        <input 
                            name='budgetHours'
                            type='number'
                            placeholder='Budget hours...'
                            value={addTaskState.budgetHours}
                            onChange={(event) => setAddTaskState({ ...addTaskState, [event.target.name]:event.target.value })}
                        />
                        <div className="add-task-button-container" >
                            <button className="add-task-button" onClick={submitAddTask} >
                                Submit
                            </button>
                        </div>
                    </form>
                  
                </div>

            </section>
        </>
    );
}


export default AddTask

