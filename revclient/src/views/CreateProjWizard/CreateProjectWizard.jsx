import React, { useState } from 'react';
import Form1 from './Form1/Form1'

const CreateProjectWizard = () => {
    const [projectDetails, setProjectDetails] = useState({ projName: "", projStartDate: "", projDescription: "", projOwnerName: "", projAddress: "", city: "", state: "", zip: null, projectDuration: null, projBudget: null, difficultyLevel: null })
    const [formPosition, setFormPosition] = useState(1)
    return (
        <div className="create-project-page">
            <div className="form-plus-quote-container">
                <h2 className="quote">Random QUote</h2>
                <div className="unknown">
                    <h1 className="title">Create Project</h1>
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
            </div>
        </div>
    );
};

export default CreateProjectWizard;