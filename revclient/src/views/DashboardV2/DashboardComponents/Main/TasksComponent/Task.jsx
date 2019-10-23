import React, { useState, useEffect } from 'react';
import { FaWrench } from 'react-icons/fa';
import { formatDate } from '../../../../../helpers/helpers';
// import { FaLightbulb, FaFire, FaWrench, FaCheck, FaRegClipboard } from "react-icons/fa";
// import { IoIosWater } from "react-icons/io";

// Gql
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_PROJECT_TASK } from '../../../../../graphql/mutations';

const Task = props => {
	const { task, project } = props;

	const [taskCompleted, setTaskCompleted] = useState({ completed: false });

	const [updateProjectTask] = useMutation(UPDATE_PROJECT_TASK);

	const submitSetTaskCompleted = async status => {
		// console.log("submit task completed", taskCompleted.completed, status, props);

		await updateProjectTask({
			variables: {
				id: task.id,
				project: project.id,
				data: {
					completed: status === 'completed' ? true : false,
				},
			},
		});
		// console.log(updated)
		if (status === 'completed') {
			setTaskCompleted({ completed: true });
		}
		if (status === 'incomplete') {
			setTaskCompleted({ completed: false });
		}
	};

	useEffect(() => {
		// Check verified
		if (task.completed) return setTaskCompleted({ completed: true });
		setTaskCompleted({ completed: false });
	}, [task]);

	// console.log("Props in the task sub component",props)

	return (
		<>
			<div className={`task-card-indicator left-bg ${task.priority.toLowerCase()}-priority`}></div>
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
						<p>
							<b>Due Date:</b> {formatDate(task.dueDate)}
						</p>
						<p>
							<b>Estimated Time:</b> {task.budgetHours} hrs.
						</p>
					</div>

					<div className="task-detail status">
						<p>Task status</p>

						{taskCompleted.completed ? (
							<select disabled value="COMPLETE">
								<option value="COMPLETE" className="completed">
									Completed
								</option>
							</select>
						) : (
							<select
								value={taskCompleted.completed ? 'COMPLETE' : 'INCOMPLETE'}
								onChange={event => {
									if (event.target.value === 'INCOMPLETE') {
										submitSetTaskCompleted('incomplete');
									}
									if (event.target.value === 'COMPLETE') {
										submitSetTaskCompleted('completed');
									}
								}}
							>
								<option value="INCOMPLETE">Not finished</option>
								<option value="COMPLETE" className="completed">
									Completed
								</option>
							</select>
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default Task;
