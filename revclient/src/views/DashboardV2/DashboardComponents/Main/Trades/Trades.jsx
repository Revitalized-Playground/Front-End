import React, { useState, useEffect } from 'react';
// import { FaLightbulb, FaFire, FaTasks FaWrench, FaCheck, FaRegClipboard } from "react-icons/fa";

import AddTask from '../AddTask/AddTask';

const ProjectTrades = props => {
	const { trade, project } = props;
	console.log('project: ', project);

	const [state, setState] = useState(false);
	const [addTaskModal, setAddTaskModal] = useState({ show: false });
};
export default ProjectTrades;
