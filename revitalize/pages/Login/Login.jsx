/**
 * * Description of component
 * TODO: things to do
 * @props description 
 */

 import React from 'react'
//  import loginIMG from '../../static/assets/AuthPages/Login.png'
 
 
 export default function Login() {
     return (
         <div className='loginContainer'>
             <div className='loginForm'>
                 <div className='loginThirdParty'>
                    <div className='loginWelcome'>
                        <h1>Welcome Back!</h1>
                        <h1>Log In</h1>
                    </div>
                    <button>
                        <div className='loginButton'>
                            <img src='../../static/assets/AuthPages/Google.png' />
                            <h3>Sign In With Google</h3>
                        </div>
                    </button>
                    <button>
                        <div className='loginButton'>
                            <img src='../../static/assets/AuthPages/fb-logo.png' />
                            <h3>Sign In With Facebook</h3>
                        </div>
                    </button>
                    <button>
                        <div className='loginButton'>
                            <img src='../../static/assets/AuthPages/twitter.png' />
                            <h3>Sign In With Twitter</h3>
                        </div>
                    </button>
                 </div>
                 <div className='loginMiddle'>
                     <div className='loginLine'></div>
                        <p>or</p>
                     <div className='loginLine'></div>
                 </div>
                 <div className='loginLocal'>
                    <div className='loginMid'>
                        <p>Dont't have an account? <span>Create One</span></p>
                    </div>
                    <p>Email</p>
                    <input 
                      placeholder='JaneDoe@gmail.com'
                    />
                    <div className='loginPass'>
                        <p className='loginSpaceAbove'>Password</p>
                        <span className='loginSpaceAbove'>Forgot Password?</span>
                    </div>
                    <input 
                      type='password'
                      placeholder='**********'
                    />
                    <p className='loginSpaceAbove'>Confirm Password</p>
                    <input 
                      type='password'
                      placeholder='**********'
                    />
                    <button>Log In</button>
                 </div>
             </div>
             <img className='loginIMG' src='../../static/assets/AuthPages/Login.png'/>
         </div>
     )
 }
 