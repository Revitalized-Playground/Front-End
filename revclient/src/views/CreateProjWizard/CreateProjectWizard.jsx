import React, { useState } from 'react';
import Form1 from './Form1/Form1'
import Form2 from './Form2/Form2'
import Form3 from './Form3/Form3'


import { useMutation } from '@apollo/react-hooks';
import { ADD_PROJECT } from '../../graphql/mutations/Project';

import {withRouter} from 'react-router-dom'


import Nav from "../../components/Layout/Nav";

// ====== properties needed ======
//  - project start Date
//  - project owner name
//  - estimated project projDuration
//  - difficulty Level



const CreateProjectWizard = ({history}) => {
    const [projectDetails, setProjectDetails] = useState({ name: '', startDate: '', country: 'USA', duration: null, description: '',  address: '', city: '', state: '', zip: null,  goalAmount: null, difficulty: ''})
    const [formPosition, setFormPosition] = useState(1)

    const [addProject] = useMutation(ADD_PROJECT)
    

    console.log(projectDetails)

    const handleChanges = event => {
        if (event.target.name === 'zip' || event.target.name === 'goalAmount' || event.target.name === 'amountFunded' || event.target.name === 'duration') {
            setProjectDetails({ ...projectDetails, [event.target.name]: Number(event.target.value) })
        } else {
            setProjectDetails({ ...projectDetails, [event.target.name]: event.target.value })
        }
    }

    const submitForm = async event => { 
        event.preventDefault();
        console.log('this is a project', projectDetails)
        const addedProj = await addProject({variables: {data: projectDetails}})
        console.log(addedProj)
        if(addedProj) {
            history.push(`/project/${addedProj.data.createProject.id}`)
        }
    }

    return (
        <>
            <Nav />
            <div className="create-project-page">
                <div className="form-plus-quote-container">

                    <q className="quote">
                        <h5>“Yesterday I was clever, 
                            <br />so I wanted to change the world 
                            <br />Today I am wise, 
                            <br />so I am changing myself.”
                        </h5>
                        <p>Jalal ad-Din Rumi PERSIAN POET</p>
                    </q>
                    

                    <div className="ui-section">
                        <div className="progress-tracker">
                            <h1 className="title">Create Project</h1>
                            <div className="tracker">
                                <div className={formPosition >= 1 ? `step active` : `step`} ></div>
                                <div className={formPosition >= 2 ? `step active` : `step`}></div>
                                <div className={formPosition >= 3 ? `step active` : `step`}></div>
                            </div>
                        </div>

                        {formPosition === 1
                            ? <Form1
                                setFormPosition={setFormPosition}
                                handleChanges={handleChanges}
                                name={projectDetails.name}
                                startDate={projectDetails.startDate}
                                description={projectDetails.description}
                            />
                            : formPosition === 2
                            ? <Form2
                                setFormPosition={setFormPosition}
                                handleChanges={handleChanges}
                                // projOwnerName={projectDetails.projOwnerName}
                                address={projectDetails.address}
                                city={projectDetails.city}
                                state={projectDetails.state}
                                zip={projectDetails.zip}
                            />
                            : formPosition === 3
                            ? <Form3
                                submitForm={submitForm}
                                setFormPosition={setFormPosition}
                                handleChanges={handleChanges}
                                duration={projectDetails.duration}
                                goalAmount={projectDetails.goalAmount}
                                // amountFunded={projectDetails.amountFunded}
                                difficulty={projectDetails.difficulty}
                            />
                            : null
                        }
                    </div>

                </div>
            </div>
        </>
    );
};

export default withRouter(CreateProjectWizard);
