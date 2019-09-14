
/**
 * * Description of component
 * TODO: things to do
 * @props description 
 */

import React from 'react'
 
export default function Register() {
    return (
        <div className='registerContainer'>
             <div className='registerForm'>
                <div className='registerThirdParty'>
                   <div className='registerWelcome'>
                       <h1>Create an Account</h1>
                       <h1>With Revitalize</h1>
                   </div>
                   <button>
                       <div className='registerButton'>
                           <img src='../../static/assets/AuthPages/Google.png' />
                           <h3>Create an Account with Google</h3>
                       </div>
                   </button>
                   <button>
                       <div className='registerButton'>
                           <img src='../../static/assets/AuthPages/fb-logo.png' />
                           <h3>Create an Account with Facebook</h3>
                       </div>
                   </button>
                   <button>
                       <div className='registerButton'>
                           <img src='../../static/assets/AuthPages/twitter.png' />
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
            <img className='registerIMG' src='../../static/assets/AuthPages/register.png'/>
        </div>
    )
}
