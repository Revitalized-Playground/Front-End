import React, {
	useState,
	// useEffect
} from 'react';
import { FaArrowLeft } from 'react-icons/fa';

import Droppy from '../../../components/PhotoUpload/Droppy';

const Form3 = ({
	setProjectDetails,
	projectDetails,
	difficulty,
	duration,
	goalAmount,
	handleChanges,
	submitForm,
	setFormPosition,
	images,
}) => {
	const [errors, setErrors] = useState({
		duration: false,
		goalAmount: false,
		difficulty: false,
	});
	console.log(projectDetails);
	const nextStep = e => {
		e.preventDefault();

		if (duration < 1) {
			setErrors({
				...errors,
				duration: true,
			});
		} else if (goalAmount <= 0) {
			setErrors({
				...errors,
				goalAmount: true,
			});
		} else if (!difficulty.length) {
			setErrors({
				...errors,
				difficulty: true,
			});
		} else {
			submitForm(e);
		}
	};

	const validateInput = e => {
		if (!e.target.value.length) {
			setErrors({
				...errors,
				[e.target.name]: true,
			});
		} else if (e.target.value < 1) {
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
		<form onSubmit={nextStep} className="form-3">
			<div className="form-1-field">
				<h4>Project Duration</h4>
				<div className="duration">
					<input
						required
						name="duration"
						type="number"
						className="duration-input"
						placeholder="Number of months"
						value={duration}
						onChange={e => {
							validateInput(e);
							handleChanges(e);
						}}
					/>
					<span>&nbsp;{duration > 1 ? 'Months' : 'Month'}</span>
				</div>
				{errors.duration && <p className="errorText">Please enter a duration</p>}
			</div>

			<div className="form-1-field">
				<h4>Goal Amount</h4>
				<input
					min="0"
					step="0.10"
					name="goalAmount"
					type="number"
					className="proj-budget"
					placeholder="How much money needs to be raised"
					value={goalAmount === 0 ? '' : goalAmount}
					onChange={e => {
						validateInput(e);
						handleChanges(e);
					}}
				/>
				{errors.goalAmount && <p className="errorText">Please enter a goal amount</p>}
			</div>

			<div className="form-1-field">
				<h4>Project Difficulty Level</h4>
				<select
					name="difficulty"
					value={difficulty}
					onChange={e => {
						validateInput(e);
						handleChanges(e);
					}}
				>
					<option>Easy</option>
					<option>Medium</option>
					<option>Hard</option>
				</select>
				{errors.difficulty && <p className="errorText">Please select a difficulty</p>}
			</div>

			<h4>Project Photos</h4>
			<Droppy images={images} setProjectDetails={setProjectDetails} projectDetails={projectDetails} />

			<div className="form-navigation">
				<button className="prev-step" onClick={() => setFormPosition(2)}>
					<FaArrowLeft />
					&nbsp;Previous
				</button>
				<button className="next-step submit" type="submit">
					Submit
				</button>
			</div>
		</form>
	);
};

export default Form3;
