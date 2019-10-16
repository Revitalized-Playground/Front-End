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
        title:"",
        description: "",
        apprentices:"",
        priority: "",
        dueDate: "",
        budgetHours: "",
    })


    const submitAddTask = async event => {
        event.preventDefault();
		
        await createProjectTask({ variables: { data: {
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

                    <h1>Add Task</h1>
                    <form onSubmit={submitAddTask} >
                        <h3>Title</h3>
                        <input 
                            name='title'
                            type='text'
                            value={addTaskState.title}
                            onChange={(event) => setAddTaskState({ ...addTaskState, [event.target.name]:event.target.value })}
                        />
                        <h3>Assign Task</h3>
                        <input 
                            name='apprentices'
                            type='text'
                            value={addTaskState.apprentices}
                            onChange={(event) => setAddTaskState({ ...addTaskState, [event.target.name]:event.target.value })}
                        />
                        <h3>Priority Level</h3>
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
                            value={addTaskState.priority}
                            onChange={(event) => setAddTaskState({ ...addTaskState, [event.target.name]:event.target.value })}
                        />
                        <h3>Trade</h3>
                         <input 
                            name='trade'
                            type='text'
                            value={addTaskState.trade}
                            onChange={(event) => setAddTaskState({ ...addTaskState, [event.target.name]:event.target.value })}
                        />
                    <div className="two-column">
                        <div className="column-left">
                    <h3>Due Date</h3>
                        
                        </div>
                        <div className="column-right">
                        <h3># of Hours</h3>
                        </div>
                        </div>
                       
                        <div className="two-column">
                        <div className="column-left">
                        <input 
                            name='dueDate'
                            type='date'
                            value={addTaskState.dueDate}
                            onChange={(event) => setAddTaskState({ ...addTaskState, [event.target.name]:event.target.value })}
                        />
                        </div>
                        <div className="column-right">
                        
                        <input 
                            name='budgetHours'
                            type='number'
                            value={addTaskState.budgetHours}
                            onChange={(event) => setAddTaskState({ ...addTaskState, [event.target.name]:event.target.value })}
                        />
                        </div>
                        </div>


                        <h3>Description</h3>
                         <textarea
                            name='description'
                            type='text'
                            placeholder=''
                            value={addTaskState.description}
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

