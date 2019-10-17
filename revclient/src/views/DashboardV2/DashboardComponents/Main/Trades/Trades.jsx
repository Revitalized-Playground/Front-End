import React, { useState } from 'react';
import { FaWrench, FaPlusCircle } from "react-icons/fa";

// import { FaLightbulb, FaFire, FaTasks FaWrench, FaCheck, FaRegClipboard } from "react-icons/fa";
// import Toggle from "react-toggle";
import AddTask from "../AddTask/AddTask";
// import AddTrade from "../../AddTrade/AddTrade";

// GQL
// import { CREATE_PROJECT_TASK } from '../';

// import { GET_PROJECT_BY_ID } from "../";

// import { useMutation, useQuery } from '@apollo/react-hooks';




const ProjectTrades = props => {
    const { trade, project, tab } = props;
    const [ addTaskModal, setAddTaskModal ] = useState({ show: false });




	if (addTaskModal.show === true) {
		return (
			<AddTask 
				setAddTaskModal={setAddTaskModal} 
				// addTaskModal={addTaskModal} 
                project={project} 
                trade={trade}
			/>
		)
	}
	
    console.log("project trades props ",  props);

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

                    <div className="trade-detail create-task"  onClick={() => setAddTaskModal({ show: true })}  >
                        Create task from this trade &nbsp;
                        <FaPlusCircle   className="add-task-button"  />
                    </div>
                    
                </div>

            </div>

        </>
    )
    
}


export default ProjectTrades;

