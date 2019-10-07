import React, { useState } from "react";
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
	const [ createUser ] = useMutation(CREATE_USER);

    const [ state, setState ] = useState({
        email: "",
		password: ""
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
        setState({ ...state, password: "" })
		localStorage.setItem("token", created.data.createUser.token);
		
		setForm({ toggleForm: true });
    };

	const goBack = () => props.history.push("/");

	const [ form, setForm ] = useState({toggleForm: false})
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
							<p className="register-title">Email</p>
							<input
								name='email'
								type='email'
								placeholder="Email..."
								value={state.email}
								onChange={handleChanges}
							/>
							<div className="register-pass">
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
							<div className="register-mid">
								<p>
									Don't have an account? <span>Create One</span>
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
