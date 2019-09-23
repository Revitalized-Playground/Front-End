/**
 * * Description of component
 * TODO: things to do
 * @props description
 */
import React, {useState} from "react";
import { 
    useMutation, 
} from "@apollo/react-hooks";
import { 
    LOGIN_USER,
} from "../../graphql/mutations";
import { withRouter } from "react-router-dom";

import {Link} from "react-router-dom";

import googleLogo from "../../assets/AuthPages/Google.png";
import revitalizeLogo from "../../assets/LandingPage/Logo.png";
import fbLogo from "../../assets/AuthPages/fb-logo.png";
import twitterLogo from "../../assets/AuthPages/twitter.png";


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
		props.history.push("/user/dashboard");
    };


	return (
		<div className="loginContainer">
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
						<div className="loginButton">
							<img src={googleLogo} alt="Google logo" />
							<h3>Sign In With Google</h3>
						</div>
					</button>
					<button>
						<div className="loginButton">
							<img src={fbLogo} alt="Facebook logo" />
							<h3>Sign In With Facebook</h3>
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
				<form className="loginLocal" onSubmit={handleSubmit}>
					<p>Email</p>
					<input 
						name='email'
						type='email'
						placeholder="JaneDoe@gmail.com"
						value={state.email}
						onChange={handleChanges}
					/>	

					<p className="registerSpaceAbove">Password</p>
					<input 
						name="password"
						type="password"
						placeholder="**********"
						value={state.password}
						onChange={handleChanges}
					/>
					
					<button>Get Started!</button>
				</form>
				<div className="loginNoAccount">
					<p>
						Don't have an account? <Link>Create One</Link>
					</p>
				</div>
			</div>
			<div className="imgContainer"></div>
		</div>
	);
}

export default withRouter(Login)
