/**
 * * Description of component
 * TODO: things to do
 * @props description
 */
import React from "react";
// import {
//     useMutation,
// } from "@apollo/react-hooks";
// import {
//     LOGIN_USER,
// } from "../../graphql/mutations";
// import { withRouter } from "react-router-dom";

import {Link} from "react-router-dom";

import googleLogo from "../../assets/AuthPages/Google.png";
import revitalizeLogo from "../../assets/LandingPage/Logo.png";
import fbLogo from "../../assets/AuthPages/fb-logo.png";
import twitterLogo from "../../assets/AuthPages/twitter.png";


export default function Login() {
	return (
		<div className="loginContainer">
			<div className="loginContainerLeft">
			<div className="revitalizeLogo-container">
				<Link to="/" title="Home">
					<div className="logo">
						<img src={revitalizeLogo} alt="Revitalize logo" />
					</div>
				</Link>
			</div>
			<div className="loginForm">
				<div className="loginThirdParty">
					<div className="loginWelcome">
						<h1>Welcome Back!</h1>
						<h1>Log In</h1>
					</div>
					<button>
						<div>
						<a className="loginButton" href={`${process.env.REACT_APP_OAUTH_GOOGLE_LINK}`}>
							<img src={googleLogo} alt="Google logo" />
							<h3>Sign In With Google</h3>
						</a>
						</div>
					</button>
					<button>
						<div className="loginButton">
						<a className="registerButton" href={`${process.env.REACT_APP_OAUTH_FACEBOOK_LINK}`}>
								<img src={fbLogo} alt="Facebook logo" />
								<h3>Sign In With Facebook</h3>
							</a>
						</div>
					</button>
					<button>
						<div className="loginButton">
							<img src={twitterLogo} alt="Twitter logo" />
							<h3>Sign In With Twitter</h3>
						</div>
					</button>
				</div>
				<div className="loginMiddle">
					<div className="loginLine"></div>
					<p>or</p>
					<div className="loginLine"></div>
				</div>
				<div className="loginLocal">
					<div className="loginMid">
						<p>
							Dont't have an account? <span>Create One</span>
						</p>
					</div>
					<p>Email</p>
					<input placeholder="JaneDoe@gmail.com" />
					<div className="loginPass">
						<p className="loginSpaceAbove">Password</p>
						<span className="loginSpaceAbove">Forgot Password?</span>
					</div>
					<input type="password" placeholder="**********" />
					<button>Log In</button>
				</div>
			</div>
			</div>
			<div className="imgContainer"></div>
		</div>
	);
}
