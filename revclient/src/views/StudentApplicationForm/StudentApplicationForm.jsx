import React, {useState} from 'react'
import './StudentApplicationForm.scss'
import swirly from '../../assets/StudentApplicationWizard/swirly.png'
import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'
import Step3 from './Steps/Step3'


const ApplicationForm = () => {
    const [chosenTrade, setChosenTrade] = useState(false)
    const [step, setStep] = useState(3)

    console.log(step)

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
                    {step === 1 
                    ?
                    <Step1 setStep={setStep} chosenTrade={chosenTrade} setChosenTrade={setChosenTrade} />
                    : step === 2
                    ?
                    <Step2 setStep={setStep} />
                    : step === 3
                    ?
                    <Step3 setStep={setStep} />
                    :
                    null
                    }
                </div>
            </div>
        </div>
    )
}

export default ApplicationForm