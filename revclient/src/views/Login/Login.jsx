import React, { useState } from "react";
import {
	useMutation,
} from "@apollo/react-hooks";
import {
	LOGIN_USER,
} from "../../graphql/mutations";

import { Link, withRouter } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import googleLogo from "../../assets/AuthPages/Google.png";
import fbLogo from "../../assets/AuthPages/fb-logo.png";



const Login = props => {
	const [loginUser, { client }] = useMutation(LOGIN_USER);
	console.log(client)
	const [state, setState] = useState({
		email: "",
		password: "",
	});

	const handleChanges = event => {
		setState({
			...state,
			[event.target.name]: event.target.value
		})
	};

	const handleSubmit = async event => {
		event.preventDefault();
		localStorage.setItem("token", "");
		await client.resetStore();
		const created = await loginUser({ variables: { data: state } });
		setState({
			email: "",
			password: "",
		})
		localStorage.setItem("token", created.data.loginUser.token);
		props.history.push("/projects");
	};

	const goBack = () => {
		props.history.push("/");
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
						<form className="login-local" onSubmit={handleSubmit}>
							<p className="login-title">Email</p>
							<input
								name='email'
								type='email'
								placeholder="Email..."
								value={state.email}
								onChange={handleChanges}
							/>
							<div className="login-pass">
								<p className="">Password</p>
								{/* <span className="">Forgot Password?</span> */}
							</div>
							<input
								name="password"
								type="password"
								placeholder="Password..."
								value={state.password}
								onChange={handleChanges}
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
