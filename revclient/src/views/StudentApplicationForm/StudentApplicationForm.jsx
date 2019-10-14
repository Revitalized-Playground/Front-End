import React, {useState} from 'react'
import './StudentApplicationForm.scss'
import swirly from '../../assets/StudentApplicationWizard/swirly.png'
import Step1 from './Steps/Step1'


const ApplicationForm = () => {
    const [chosenTrade, setChosenTrade] = useState(false)
    const [step, setStep] = useState(1)

    return(
        <div className='student-application-form-container'>
            <div style={{backgroundImage: `url(${swirly})`}} className='swirly-div'>
                <div  className='student-app-steps'>
                    <h3 style={{color: step === 1 ? 'white' : null}}>Step 1</h3>
                    <h3 style={{color: step === 2 ? 'white' : null}}>Step 2</h3>
                    <h3 style={{color: step === 3 ? 'white' : null}}>Step 3</h3>
                    <h3 style={{color: step === 4 ? 'white' : null}}>Step 4</h3>
                    <h3 style={{color: step === 5 ? 'white' : null}}>Step 5</h3> 
                </div>
                <div className='student-app-images'>
                    
                </div>
            </div>
            <div className='right-div'>
                <div className='right-div-content'>
                    <Step1 />
                    <h2 className='title'>Tell Who You Are</h2>
                    <form>
                        <div className='welcome-container'>
                            <h2>Hey [will be dynamic]</h2>
                        </div>
                        <select onChange={() => setChosenTrade(true)}>
                            <option selected disabled>Choose Your Trade</option>
                            <option>Construction/Maintenance</option>
                            <option>Heating/Air</option>
                            <option>Lighting</option>
                            <option>Plumbing</option>
                        </select>
                    </form>
                    {chosenTrade && 
                    <div>
                        <h4>Are you licensed in this trade?</h4>
                        <form className='radio-form'>
                            <input type='radio' name='choice'/>
                            <label>Yes</label>
                            <input type='radio' name='choice'/>
                            <label>No</label>
                        </form>
                    </div>}
                    
                </div>
            </div>
        </div>
    )
}

export default ApplicationForm