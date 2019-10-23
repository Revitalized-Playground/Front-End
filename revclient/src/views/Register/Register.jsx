import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	useMutation,
} from "@apollo/react-hooks";
import {
	CREATE_USER,
} from "../../graphql/mutations";
import { withRouter } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import googleLogo from '../../assets/AuthPages/Google.png';
import fbLogo from '../../assets/AuthPages/fb-logo.png';
import SetupProfile from "../SetupProfile/SetupProfile";


const Register = props => {
	const [createUser] = useMutation(CREATE_USER);

	const [state, setState] = useState({
		email: "",
		password: "",
		errors: {
			email: false,
			password: false,
			serverMsg: "",
			invalidCreds: false
		}
	});


	const validateInput = e => {
		if (!e.target.value.length) {
			setState({
				...state,
				[e.target.name]: e.target.value,
				errors: {
					...state.errors,
					[e.target.name]: true,
				}
			});
		} else {
			setState({
				...state,
				[e.target.name]: e.target.value,
				errors: {
					...state.errors,
					[e.target.name]: false,
				}

			});
		}
	};

	// const handleSubmit = async event => {
	// 	event.preventDefault();
	// 	localStorage.setItem("token", "");

	// 	const created = await createUser({ variables: { data: state } });
	// 	setState({ ...state, password: "" })
	// 	localStorage.setItem("token", created.data.createUser.token);

	// 	setForm({ toggleForm: true });
	// };

	const handleSubmit = async event => {
		event.preventDefault();
		localStorage.setItem("token", "");
		let created = null
		createUser({ variables: { data: { email: state.email, password: state.password } } })
			.then((res) => {
				created = res;
				const { token } = created.data
				localStorage.setItem("token", token);
				setForm({ toggleForm: true });
			})
			.catch((err) => {
				err.message
					? setState({ ...state, errors: { ...state.errors, serverMsg: err.message } })
					: err.graphQLErrors[0].message.includes("email")
						? setState({ ...state, errors: { ...state.errors, invalidCreds: true } })
						: setState({ ...state, errors: { ...state.errors, serverMsg: err.graphQLErrors[0].message } })
			})
	};


	const goBack = () => props.history.push("/");

	const [form, setForm] = useState({ toggleForm: false })
	const toggleForm = () => setForm({ toggleForm: !state.toggleForm })



	return (
		<>
			{form.toggleForm
				?
				<SetupProfile destination="modal" toggleForm={toggleForm} email={state.email} />
				: null
			}
			<div className="register-container">
				<FaArrowLeft onClick={goBack} />
				<div className="register-container-left">

					<div className="register-form">
						<div className="register-third-party">
							<div className="register-welcome">
								<h2>Get Started!</h2>
							</div>
							<button>
								<div>
									<a className="register-button" href={`${process.env.REACT_APP_OAUTH_GOOGLE_LINK}`}>
										<img src={googleLogo} alt="Google logo" />
										<h5>Register With Google</h5>
									</a>
								</div>
							</button>
							<button>
								<div>
									<a className="register-button" href={`${process.env.REACT_APP_OAUTH_FACEBOOK_LINK}`}>
										<img src={fbLogo} alt="Facebook logo" />
										<h5>Register With Facebook</h5>
									</a>
								</div>
							</button>
						</div>
						<div className="register-middle">
							<div className="register-line"></div>
							<p>or</p>
							<div className="register-line"></div>
						</div>
						<form className="register-local" onSubmit={handleSubmit}>
							<div className="email-lable-container">
								<p className="register-title">Email</p>
								{state.errors.invalidCreds && <p className="errorText">It seems a user with that email already exists.</p>}
							</div>
							<input
								name='email'
								type='email'
								required
								className={`${(state.errors.email || state.errors.invalidCreds) && `errorBorder`}`}
								placeholder="Email..."
								value={state.email}
								onChange={validateInput}
							/>
							<div className="register-pass">
								<p className="">Password</p>
								{state.errors.serverMsg && <p className="errorText">{state.errors.serverMsg}</p>}
							</div>
							<input
								name="password"
								type="password"
								required
								className={`${(state.errors.email || state.errors.invalidCreds) && `errorBorder`}`}
								placeholder="Password..."
								value={state.password}
								onChange={validateInput}
							/>
							<div className="register-mid">
								<p>
									Already have an acount? <Link to='/login' style={{ textDecoration: `underline` }}>Log in</Link>
								</p>
							</div>
							<button>Register</button>
						</form>
					</div>
				</div>
				<div className="imgContainer"></div>
			</div>
		</>
	);
}

export default withRouter(Register)