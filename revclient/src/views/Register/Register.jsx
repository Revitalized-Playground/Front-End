/**
 * * Description of component
 * TODO: things to do
 * @props description
 */
<<<<<<< HEAD
import React from 'react';
=======
import React from 'react'

import google from "../../assets/AuthPages/Google.png";
import fbLogo from "../../assets/AuthPages/fb-logo.png";
import revitalizeLogo from '../../assets/LandingPage/Logo.png';
import twitter from "../../assets/AuthPages/twitter.png";
>>>>>>> f4c3470211078d00a25fd6efcaa38822e04ddb90

import google from '../../assets/AuthPages/Google.png';
import fbLogo from '../../assets/AuthPages/fb-logo.png';
import twitter from '../../assets/AuthPages/twitter.png';
import CAAImage from '../../assets/AuthPages/CAAImage.svg';

export default function Register() {
<<<<<<< HEAD
	return (
		<div className="registerContainer">
			<div className="registerForm">
				<div className="registerThirdParty">
					<div className="registerWelcome">
						<h1>Create an Account</h1>
						<h1>With Revitalize</h1>
					</div>
					<button>
						<div className="registerButton">
							<img src={google} alt="Google" />
							<h3>Create an Account with Google</h3>
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
				<div className="registerLocal">
					<p>Email</p>
					<input placeholder="JaneDoe@gmail.com" />
					<p className="registerSpaceAbove">Password</p>
					<input type="password" placeholder="**********" />
					<p className="registerSpaceAbove">Confirm Password</p>
					<input type="password" placeholder="**********" />
					<button>Get Started!</button>
				</div>
			</div>
			<img src={CAAImage} className="registerIMG" alt="Register" />
		</div>
	);
=======
    return (
        <div className='registerContainer'>

        <div className='revitalizeLogo-container'>
        	<a href="/" title="Home">
				<div className="logo">
					<img src={revitalizeLogo} alt="Revitalize logo" />					
				</div>
			</a>
        </div>
            <div className='registerForm'>
                <div className='registerThirdParty'>
                    <div className='registerWelcome'>
                        <h1>Create an Account</h1>
                        <h1>With Revitalize</h1>
                    </div>
                    <button>
                        <div className='registerButton'>
                            <img src={google} alt="Google" />
                            <h3>Create an Account with Google</h3>
                        </div>
                    </button>
                    <button>
                        <div className='registerButton'>
                            <img src={fbLogo} alt="Facebook" />
                            <h3>Create an Account with Facebook</h3>
                        </div>
                    </button>
                    <button>
                        <div className='registerButton'>
                            <img src={twitter} alt="Twitter" />
                            <h3>Create an Account with Twitter</h3>
                        </div>
                    </button>
                </div>
                <div className='registerMiddle'>
                    <div className='registerLine'></div>
                    <p>or</p>
                    <div className='registerLine'></div>
                </div>
                <div className='registerLocal'>
                    <p>Email</p>
                    <input
                        placeholder='JaneDoe@gmail.com'
                    />
                    <p className='registerSpaceAbove'>Password</p>
                    <input
                        type='password'
                        placeholder='**********'
                    />
                    <p className='registerSpaceAbove'>Confirm Password</p>
                    <input
                        type='password'
                        placeholder='**********'
                    />
                    <button>Get Started!</button>
                </div>
            </div>
            <div className="registerIMG"></div>
        </div>
    )
>>>>>>> 05570818af643e5d898452c1520fbdcdc5ccc9ac
}
