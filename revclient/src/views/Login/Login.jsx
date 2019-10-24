import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

// GQL
import {
	useMutation,
} from "@apollo/react-hooks";
import {
	LOGIN_USER,
} from "../../graphql/mutations";

// Images
import googleLogo from "../../assets/AuthPages/Google.png";
import fbLogo from "../../assets/AuthPages/fb-logo.png";



const Login = props => {
	const [loginUser, { client }] = useMutation(LOGIN_USER);
	// console.log(client)
	const [state, setState] = useState({
		email: "",
		password: "",
		errors: {
			email: false,
			password: false,
			invalidCreds: false
		}
	});


	// const nextStep = e => {
	// 	e.preventDefault();

	// 	if (!state.email.length) {
	// 		setState({
	// 			...state,
	// 			errors: {
	// 				...state.errors,
	// 				email: true,
	// 			}
	// 		});
	// 	} else if (!state.password.length) {
	// 		setState({
	// 			...state,
	// 			errors: {
	// 				...state.errors,
	// 				password: true,
	// 			}
	// 		});
	// 	} else {
	// 		handleSubmit(e);
	// 	}
	// };

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
		await client.resetStore();
		loginUser({ variables: { data: { email: state.email, password: state.password } } })
			.then(res => {
				created = res;
				setState({
					email: "",
					password: "",
					errors: {
						email: false,
						password: false
					}
				})
				localStorage.setItem("token", created.data.loginUser.token);
				props.history.push("/dashboard");
			})
			.catch(() => {
				setState({ ...state, errors: { ...state.errors, invalidCreds: true } })
			})


	};

	const goBack = () => {
		props.history.push(props.history[-1] || "/");
	}

	return (
		<>
			<div className="login-container">
				<FaArrowLeft onClick={goBack} />
				<div className="login-container-left">

					<div className="login-form">
						<div className="login-third-party">
							<div className="login-welcome">
								<h2>Welcome Back!</h2>
							</div>
							<button>
								<div>
									<a className="login-button" href={`${process.env.REACT_APP_OAUTH_GOOGLE_LINK}`}>
										<img src={googleLogo} alt="Google logo" />
										<h5>Sign In With Google</h5>
									</a>
								</div>
							</button>
							<button>
								<div>
									<a className="login-button" href={`${process.env.REACT_APP_OAUTH_FACEBOOK_LINK}`}>
										<img src={fbLogo} alt="Facebook logo" />
										<h5>Sign In With Facebook</h5>
									</a>
								</div>
							</button>
						</div>
						<div className="login-middle">
							<div className="login-line"></div>
							<p>or</p>
							<div className="login-line"></div>
						</div>
						<form className="login-local" onSubmit={e => handleSubmit(e)}>
							<div className="login-email">
								<p className="login-title">Email</p>
								{state.errors.invalidCreds && <p className="errorText">Invalid Email and/or Password</p>}
							</div>
							<input
								name='email'
								type='email'
								required
								placeholder="Email..."
								className={`${(state.errors.email || state.errors.invalidCreds) && `errorBorder`}`}
								value={state.email}
								onChange={e => {
									validateInput(e);
								}}
							/>
							<div className="login-pass">
								<p className="">Password</p>
							</div>
							<input
								name="password"
								type="password"
								placeholder="Password..."
								required
								className={`${(state.errors.password || state.errors.invalidCreds) && `errorBorder`}`}
								value={state.password}
								onChange={e => {
									validateInput(e)
								}}
							/>
							<div className="login-mid">
								<p>
									Don't have an account? <Link to='/register' style={{ textDecoration: `underline` }}>Create One</Link>
								</p>
							</div>
							<button>Log In</button>
						</form>
					</div>
				</div>
				<div className="imgContainer"></div>
			</div>
		</>
	);
}

export default withRouter(Login)
