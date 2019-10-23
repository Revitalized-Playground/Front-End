import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import { useMutation } from '@apollo/react-hooks';
import { ADD_PROJECT } from '../../graphql/mutations/Project';

import Nav from '../../components/Layout/Nav';
import Footer from '../../components/Layout/Footer';
import Form1 from './Form1/Form1';
import Form2 from './Form2/Form2';
import Form3 from './Form3/Form3';

// ====== properties needed ======
//  - project start Date
//  - project owner name
//  - estimated project projDuration
//  - difficulty Level

let currentDate = moment().format('YYYY-MM-DD');

const CreateProjectWizard = ({ history }) => {
	let [projectDetails, setProjectDetails] = useState({
		name: "",
		startDate: currentDate,
		country: "United States",
		duration: 1,
		description: "",
		address: "",
		city: "",
		state: "",
		zip: "",
		goalAmount: 100.00,
		difficulty: "Easy",
		images: [],
		featuredImage: "",
	});
	const [formPosition, setFormPosition] = useState(1);
	const [addProject] = useMutation(ADD_PROJECT);

	const handleChanges = event => {
		if (
			event.target.name === 'goalAmount' ||
			// event.target.name === 'amountFunded' ||
			event.target.name === 'duration'
		) {
			setProjectDetails({ ...projectDetails, [event.target.name]: Number(event.target.value) });
		} else if (event.target.name === 'zip') {
			if (projectDetails.zip.length === 5) {
				return;
			} else {
				setProjectDetails({ ...projectDetails, [event.target.name]: event.target.value });
			}
		} else {
			setProjectDetails({ ...projectDetails, [event.target.name]: event.target.value });
		}
	};

	const submitForm = async () => {
		let newProjectDetails = {
			...projectDetails,
			country: "United States",
			zip: parseInt(projectDetails.zip, 10),
		};
		
		console.log("added project in crw  1", newProjectDetails);

		// SOS FRANK: UPDATE CACHE
		const addedProj = await addProject({ variables: { data: newProjectDetails } });

		console.log("added project in crw", addedProj);

		history.push(`/project/${addedProj.data.createProject.slug}`);
	};

	return (
		<>
			<Nav />
			<section className="create-project-wizard-container">
				<div className="create-project">
					<div className="form-plus-quote-container">
						<q className="quote">
							<h5>
								“Yesterday I was clever,
								<br />
								so I wanted to change the world
								<br />
								Today I am wise,
								<br />
								so I am changing myself.”
							</h5>
							<p>Jalal ad-Din Rumi PERSIAN POET</p>
						</q>

						<div className="ui-section">
							<div className="progress-tracker">
								<h1 className="title">Create Project</h1>
								<div className="tracker">
									<div className={formPosition >= 1 ? `step active` : `step`}></div>
									<div className={formPosition >= 2 ? `step active` : `step`}></div>
									<div className={formPosition >= 3 ? `step active` : `step`}></div>
								</div>
							</div>

							{formPosition === 1 ? (
								<Form1
									setFormPosition={setFormPosition}
									handleChanges={handleChanges}
									name={projectDetails.name}
									startDate={projectDetails.startDate}
									description={projectDetails.description}
								/>
							) : formPosition === 2 ? (
								<Form2
									setFormPosition={setFormPosition}
									handleChanges={handleChanges}
									address={projectDetails.address}
									city={projectDetails.city}
									state={projectDetails.state}
									zip={projectDetails.zip}
									// projOwnerName={projectDetails.projOwnerName}
								/>
							) : formPosition === 3 ? (
								<Form3
									setFormPosition={setFormPosition}
									handleChanges={handleChanges}
									submitForm={submitForm}
									setProjectDetails={setProjectDetails}
									projectDetails={projectDetails}
									duration={projectDetails.duration}
									goalAmount={projectDetails.goalAmount}
									donations={projectDetails.donations}
									difficulty={projectDetails.difficulty}
									images={projectDetails.images}
									// amountFunded={projectDetails.amountFunded}
								/>
							) : null}
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default withRouter(CreateProjectWizard);
