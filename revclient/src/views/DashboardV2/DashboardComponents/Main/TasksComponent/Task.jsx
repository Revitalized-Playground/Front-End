import React, { useState, useEffect } from 'react';
import { FaWrench } from "react-icons/fa";
import { formatDate } from "../../../../../helpers/helpers";
// import { FaLightbulb, FaFire, FaWrench, FaCheck, FaRegClipboard } from "react-icons/fa";
// import { IoIosWater } from "react-icons/io";


// Gql
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_PROJECT_TASK } from "../../../../../graphql/mutations";




const Task = props => {
	const { task, tab, mainTabs, project, } = props;
	
	const [ taskCompleted, setTaskCompleted ] = useState({ completed: false });
	
	const [ updateProjectTask ] = useMutation( UPDATE_PROJECT_TASK );

	const submitSetTaskCompleted = async (status) => {
		// event.preventDefault();
		await updateProjectTask({ 
			variables: { 
				id: project.profile.id,
				project: project.id,
				data: {
					completed: taskCompleted.completed
				} 
			} 
		});
		console.log(taskCompleted.completed);
		if (status.completed = true) {
			setTaskCompleted({ completed: true })
		}
		if (status.completed = false) {
			setTaskCompleted({ completed: false })
		}
	}


    useEffect(() => {   // Check verified 
        if (task.completed) return setTaskCompleted({ completed: true })
        setTaskCompleted({ completed: false })
    }, [task]);

	console.log("Props in the task sub component",props)

	return (
		<>


			<div className={`task-card-indicator left-bg ${task.priority.toLowerCase()}-priority`} ></div>
			<section className="task-card-container">
                
                <div className="task-body">
                    <div className="task-icon">
                        <FaWrench />
                    </div>
                    
					<div className="task-detail title">
                        <h3>{task.title}</h3>
						<p>{task.description}</p>
                    </div>

                    <div className="task-detail details">
                        <p><b>Due Date:</b> {formatDate(task.dueDate)}</p>
                        <p><b>Estimated Time:</b> {task.budgetHours} hrs.</p>
                    </div>
					
					<div className="task-detail status"   >

						<p>Task status</p>

						<select
							value={taskCompleted.completed}
							onChange={(event) => {
								if (event.target.value === false) {
									submitSetTaskCompleted({ completed: false })
								}
								if (event.target.value === true) {
									submitSetTaskCompleted({ completed: true })
								}
								
							}}
						>
							<option value="">Task Status</option>
							<option value={false}>Not finished</option>
							<option value={true} className="completed">Completed</option>
						</select>

					</div>

                    
                    
                </div>

            </section>


			{/* <div className={`task-card-indicator left-bg ${task.priority.toLowerCase()}-priority`} ></div>

			<div className="task" key={task.id + Date.now()}>

				<div className="task-card-container" >
					<div className="task-card-img-container" >
						<img src={task.image} alt="" />
					</div>
					<div className="task-card-text">
						<h5>{task.priority}</h5>
						<p className="description">{task.description}</p>
					</div>
					<div className="task-card-icon-container">
						<div className="no-picture"></div>
					</div>
				</div>
			</div> */}

		</>
	);
};

export default Task;
