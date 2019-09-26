/**
 * * Description of component
 * TODO: things to do
 * @props description
 */
import React, { useState } from "react";
import { 
    useMutation, 
} from "@apollo/react-hooks";
import { 
    CREATE_USER,
} from "../../graphql/mutations";
import { withRouter } from "react-router-dom";

import {Link} from "react-router-dom";

import google from '../../assets/AuthPages/Google.png';
import fbLogo from '../../assets/AuthPages/fb-logo.png';
import revitalizeLogo from '../../assets/LandingPage/Logo.png';
import twitter from '../../assets/AuthPages/twitter.png';


function Register(props) {
	const [ createUser ] = useMutation(CREATE_USER);

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
        const created = await createUser({ variables: { data: state } });
        setState({
            email:"",
            password:"",
        })
		localStorage.setItem("token", created.data.createUser.token);
		props.history.push("/");
    };

	return (
		<div className="registerContainer">
			
			<div className="revitalizeLogo-container">
				<Link to="/" title="Home">
					<div className="logo">
						<img src={revitalizeLogo} alt="Revitalize logo" />
					</div>
				</Link>
			</div>

			<div className="registerForm">
				<div className="registerThirdParty">
					<div className="registerWelcome">
						<h1>Create an Account</h1>
						<h1>With Revitalize</h1>
					</div>
					<button>
						<div >
							<a className="registerButton" href={`${process.env.REACT_APP_OAUTH_GOOGLE_LINK}`}>
								<img src={google} alt="Google" />
								<h3>Create an Account with Google</h3>
							</a>
						</div>
					</button>
					<button>
						<div className="registerButton">
							<img src={fbLogo} alt="Facebook" />
							<h3>Create an Account with Facebook</h3>
						</div>
					</button>
					<button>
						<div className="registerButton">
							<img src={twitter} alt="Twitter" />
							<h3>Create an Account with Twitter</h3>
						</div>
					</button>
				</div>
				<div className="registerMiddle">
					<div className="registerLine"></div>
					<p>or</p>
					<div className="registerLine"></div>
				</div>
				<form className="registerLocal" onSubmit={handleSubmit}>
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
					
					{/* <p className="registerSpaceAbove">Confirm Password</p>
					<input type="password" placeholder="**********" /> */}
					
					<button>Get Started!</button>
				</form>
			</div>
			<div className="registerIMG"></div>
		</div>
	);
}

export default withRouter(Register)
