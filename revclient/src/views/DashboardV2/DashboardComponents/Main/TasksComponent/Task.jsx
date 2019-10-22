import React from 'react';
import { FaWrench, FaPlusCircle } from "react-icons/fa";
import { formatDate } from "../../../../../helpers/helpers";
// import { FaLightbulb, FaFire, FaWrench, FaCheck, FaRegClipboard } from "react-icons/fa";
// import { IoIosWater } from "react-icons/io";



const Task = props => {
	const { task, tab, mainTabs, project, } = props;


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
						{task.completed ? (
							<p>Completed</p>
						) : (
							<p>Not completed</p>
						)}
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
