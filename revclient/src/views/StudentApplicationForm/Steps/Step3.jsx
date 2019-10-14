import React from 'react'


const Step3 = ({setStep}) => {

    return (
        <div className='second-page'>
            <h2 className='title'>Getting to know you more</h2>
            <form>
                <h4>Please list below your education.</h4>
                <textarea className='page-two-text-area' />
                <h4>Availability is critical to successfully completing apprenticeship. Would you be available for more than 90% of the time dedicated to project(s)? If not, please provide any dates you would need time off.</h4>
                <textarea className='page-two-text-area'/>
                <h4 className='email-text'>Please email your resume/curriculum vitae to projects.apply@revitalize.com</h4>
                <div className='button-container two'>
                    <button onClick={() => setStep(2)}>&larr; Back</button>
                    <button>Submit &#10003;</button>
                </div>
            </form>
        </div>
    )
}

export default Step3