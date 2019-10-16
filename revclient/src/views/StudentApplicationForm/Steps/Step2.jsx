import React from 'react'


const Step2 = ({setStep, obj, setObj}) => {

    const changeHandler = e => {
        setObj({...obj, [e.target.name]: e.target.value})
    }

    return (
        <div className='second-page'>
            <h2 className='title'>Getting to know you more</h2>
            <form>
                <h4>Please explain why you are seeking this apprenticeship.</h4>
                <textarea value={obj.coverLetter} onChange={changeHandler} name='coverLetter' className='page-two-text-area'></textarea>
                <h4>Please list below any prior job experience(s).</h4>
                <textarea value={obj.jobExperience} onChange={changeHandler} name='jobExperience'  className='page-two-text-area second'></textarea>
            </form>
            <div className='button-container two'>
                <button onClick={() => setStep(1)}>&larr; Back</button>
                <button onClick={() => setStep(3)}>Next &rarr;</button>
            </div>
        </div>
    )
}


export default Step2