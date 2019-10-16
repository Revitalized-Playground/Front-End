import React, { useState, useEffect } from 'react';
// import { FaLightbulb, FaFire, FaTasks FaWrench, FaCheck, FaRegClipboard } from "react-icons/fa";
import { FaWrench, FaTasks } from "react-icons/fa";
// import Toggle from "react-toggle";

// import AddTask from "../AddTask/AddTask";


const ProjectTrades = props => {
    const { trade } = props;

    // const [ state, setState ] = useState(false);
    // const [ addTaskModal, setAddTaskModal ] = useState({ show: false })


    // if (addTaskModal.show === true) {
	// 	return (
	// 		<AddTask setAddTaskModal={setAddTaskModal} addTaskModal={addTaskModal} projectId={project.id} tradeId={trade.id} />
	// 	)
	// }

    // console.log("projectTrades props  ", props);

    return (
        <>


            <div className="trade-card-container">
                
                <div className="trade-body">
                    <div className="trade-icon">
                        <FaWrench />
                    </div>
                    
                    <div className="trade-detail description">
                        <h3>{trade.name}</h3>
                        <p>{trade.description}</p>
                    </div>

                    <div className="trade-detail create-task">
                        something here later
                    </div>
                    
                </div>

            </div>

        </>
    )
    
}


export default ProjectTrades;

