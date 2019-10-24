import React from 'react';
import { FaWrench, FaPlusCircle } from 'react-icons/fa';

const ProjectTrades = props => {
	const { trade, project, setAddTaskModal } = props;

	return (
		<>
			<section className="trade-card-container">
				<div className="trade-body">
					<div className="trade-icon">
						<FaWrench />
					</div>

					<div className="trade-detail description">
						<h3>{trade.name}</h3>
						<p>{trade.description}</p>
					</div>

					<div
						className="trade-detail create-task"
						onClick={() => setAddTaskModal({ show: true, selectedProject: project, trade: trade })}
					>
						Create task from this trade &nbsp;
						<FaPlusCircle className="add-task-button" />
					</div>
				</div>
			</section>
		</>
	);
};

export default ProjectTrades;
