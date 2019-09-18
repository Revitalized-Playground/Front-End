/**
 * * Description of component
 * TODO: things to do
 * @props description 
 */
import React from 'react'

import google from "../../assets/AuthPages/Google.png";
import fbLogo from "../../assets/AuthPages/fb-logo.png";
import revitalizeLogo from '../../assets/LandingPage/Logo.png';
import twitter from "../../assets/AuthPages/twitter.png";

import Nav from '../../components/Layout/Nav'




export default function Register() {
    return (
        <div className='registerContainer'>
<<<<<<< HEAD
        <div className='revitalizeLogo-container'>
        	<a href="/" title="Home">
				<div className="logo">
					<img src={revitalizeLogo} alt="Revitalize logo" />					
				</div>
			</a>
        </div>
=======
            <Nav />
>>>>>>> 9485b2c93964134938f9ab027da9b85b6bb588c0
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
}


