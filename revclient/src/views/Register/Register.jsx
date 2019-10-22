import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	useMutation,
} from "@apollo/react-hooks";
import {
	CREATE_USER,
	LOGIN_USER,
} from "../../graphql/mutations";

import { withRouter } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import googleLogo from '../../assets/AuthPages/Google.png';
import fbLogo from '../../assets/AuthPages/fb-logo.png';
import SetupProfile from "../SetupProfile/SetupProfile";


const Register = props => {
	const [createUser] = useMutation(CREATE_USER);
	const [loginUser, { client }] = useMutation(LOGIN_USER);

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

	const handleSubmit = async event => {
		event.preventDefault();
		localStorage.setItem("token", "");
		let created = null
		let loggedIn = null
		createUser({ variables: { data: { email: state.email, password: state.password } } })
			.then((res) => {
				console.log(res);
				created = res;
				const { token } = created.data
				localStorage.setItem("token", created.data.createUser.token);
				props.history
			})
			.catch((err) => { err.graphQLErrors[0].message.includes("email") ? setState({ ...state, errors: { ...state.errors, invalidCreds: true } }) : setState({ ...state, errors: { ...state.errors, serverMsg: err.graphQLErrors[0].message } }) })

		// loginUser({ variables: { data: { email: state.email, password: state.password } } })
		// 	.then(async res => {
		// await client.resetStore();
		// 		loggedIn = res;
		// 		setState({
		// 			email: "",
		// 			password: "",
		// 			errors: {
		// 				email: false,
		// 				password: false
		// 			}
		// 		})
		// 		localStorage.setItem("token", loggedIn.data.loginUser.token);
		// 		props.history.push("/dashboard");
		// 	})
		// 	.catch(() => {
		// 		setState({ ...state, errors: { ...state.errors, invalidCreds: true } })
		// 	})


	};

	const goBack = () => props.history.push("/");




	return (
		<>

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
							<div className="register-Line"></div>
							<p>or</p>
							<div className="register-Line"></div>
						</div>
						<form className="register-local" onSubmit={e => handleSubmit(e)}>
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
