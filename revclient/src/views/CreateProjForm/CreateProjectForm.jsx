import React, { useState } from 'react';
import Form1 from './Form1/Form1'

const CreateProjectWizard = () => {
    const [projectDetails, setProjectDetails] = useState({ projName: "", projStartDate: "", projDescription: "", projOwnerName: "", projAddress: "", city: "", state: "", zip: null, projectDuration: null, projBudget: null, difficultyLevel: null })
    const [formPosition, setFormPosition] = useState(1)
    return (
        <div className="create-project-forms">
            {formPosition === 1
                ? <Form1
                    setFormPosition={setFormPosition}
                    setProjectDetails={setProjectDetails}
                    projName={projectDetails.projName}
                    projStartDate={projectDetails.projStartDate}
                    projDescription={projectDetails.projDescription}
                />
                : <h1> Hello</h1>
            }
        </div>
    );
};

export default CreateProjectWizard;