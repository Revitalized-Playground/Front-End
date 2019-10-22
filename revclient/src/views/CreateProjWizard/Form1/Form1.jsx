import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Form1 = ({ name, description, handleChanges, setFormPosition, startDate }) => {
	const [errors, setErrors] = useState({
		name: false,
		startDate: false,
		description: false,
	});

	const nextStep = e => {
		e.preventDefault();

		if (!name.length) {
			setErrors({
				...errors,
				name: true,
			});
		} else if (!startDate.length) {
			setErrors({
				...errors,
				startDate: true,
			});
		} else if (!description.length) {
			setErrors({
				...errors,
				description: true,
			});
		} else {
			setFormPosition(2);
		}
	};

	const validateInput = e => {
		if (!e.target.value.length) {
			setErrors({
				...errors,
				[e.target.name]: true,
			});
		} else {
			setErrors({
				...errors,
				[e.target.name]: false,
			});
		}
	};

	return (
		<form onSubmit={nextStep} className="form-1">
			<div className="form-1-field">
				<h4>Name</h4>
				<input
					label="Project Name"
					name="name"
					type="text"
					className={`${errors.name && `errorBorder`}`}
					placeholder="Project Name"
					value={name}
					onChange={e => {
						handleChanges(e);
						validateInput(e);
					}}
				/>
				{errors.name && <p className="errorText">Please enter a project name</p>}
			</div>

			<div className="form-1-field">
				<h4>Start Date</h4>
				<input
					name="startDate"
					type="date"
					className="start-date"
					value={startDate}
					onChange={e => {
						handleChanges(e);
						validateInput(e);
					}}
				/>
				{errors.startDate && <p className="errorText">Please select a project date</p>}
			</div>

			<div className="form-1-field">
				<h4>Description</h4>
				<textarea
					name="description"
					type="text"
					className={`description ${errors.description && `errorBorder`}`}
					placeholder="Project Description"
					value={description}
					onChange={e => {
						handleChanges(e);
						validateInput(e);
					}}
				/>
				{errors.description && <p className="errorText">Please enter a project description</p>}
			</div>

			<div className="form-navigation first-step">
				<button className="next-step">
					Next&nbsp;
					<FaArrowRight />
				</button>
			</div>
		</form>
	);
};

export default Form1;
