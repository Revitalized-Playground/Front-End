import React, { useState } from "react";
import {
    useMutation,
} from "@apollo/react-hooks";
import {
    LOGIN_USER,
} from "../../graphql/mutations"; 

import { Link, withRouter } from "react-router-dom";

import revitalizeLogo from "../../assets/LandingPage/Logo.png";
import googleLogo from "../../assets/AuthPages/Google.png";
import fbLogo from "../../assets/AuthPages/fb-logo.png";
// import twitterLogo from "../../assets/AuthPages/twitter.png";


const Login = props => {
	const [ loginUser ] = useMutation(LOGIN_USER);

    const [state, setState] = useState({
        email:"",
        password:"",
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
        const created = await loginUser({ variables: { data: state } });
        setState({
            email:"",
            password:"",
        })
		localStorage.setItem("token", created.data.loginUser.token);
		props.history.push("/");
	};
	
	return (
		<div className="login-container">
			<div className="loginContainerLeft">
				<div className="revitalizeLogo-container">
					<Link to="/" title="Home">
						<div>
							<img src={revitalizeLogo} alt="Revitalize logo" />
						</div>
					</Link>
				</div>
				<div className="loginForm">
					<div className="loginThirdParty">
						<div className="loginWelcome">
							<h2>Welcome Back!</h2>
							<h2>Log In</h2>
						</div>
						<button>
							<div>
								<a className="loginButton" href={`${process.env.REACT_APP_OAUTH_GOOGLE_LINK}`}>
									<img src={googleLogo} alt="Google logo" />
									<h5>Sign In With Google</h5>
								</a>
							</div>
						</button>
						<button>
							<div>
								<a className="loginButton" href={`${process.env.REACT_APP_OAUTH_FACEBOOK_LINK}`}>
									<img src={fbLogo} alt="Facebook logo" />
									<h5>Sign In With Facebook</h5>
								</a>
							</div>
						</button>
					</div>
					<div className="loginMiddle">
						<div className="loginLine"></div>
						<p>or</p>
						<div className="loginLine"></div>
					</div>
					<form className="loginLocal" onSubmit={handleSubmit}>
						<p className="login-title">Email</p>
						<input
							name='email'
							type='email'
							placeholder="Email..."
							value={state.email}
							onChange={handleChanges}
                		/>
						<div className="loginPass">
							<p className="">Password</p>
							<span className="">Forgot Password?</span>
						</div>
						<input
							name="password"
							type="password"
							placeholder="Password..."
							value={state.password}
							onChange={handleChanges}
                		/>
						<div className="loginMid">
							<p>
								Don't have an account? <span>Create One</span>
							</p>
						</div>
						<button>Log In</button>
					</form>
				</div>
			</div>
			<div className="imgContainer"></div>
		</div>
	);
}

export default withRouter(Login)