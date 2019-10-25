import React from 'react'


const Step2 = ({setStep, obj, setObj, errorHandle, setErrorHandle}) => {

    const next = () => {
        if(obj.coverLetter.length === 0 || obj.jobExperience.length === 0) {
            for(let key in obj) {
                if(key === 'coverLetter' || key === 'jobExperience') {
                    if(obj[key].length === 0) {
                        setErrorHandle(errorHandle => ({...errorHandle, [key]: true}))
                    }
                }
            }
        } else {
            setStep(3)
        }
    }

    const changeHandler = e => {
        setObj({...obj, [e.target.name]: e.target.value})
    }

    return (
        <div className='second-page'>
            <h2 className='title'>Getting to know you more</h2>
            <form>
                <h4>Please explain why you are seeking this apprenticeship.</h4>
                <textarea 
                    style={{marginBottom: !errorHandle.coverLetter && '60px'}}
                    value={obj.coverLetter} 
                    onClick={() => setErrorHandle({...errorHandle, coverLetter: false})} 
                    onChange={changeHandler}
                    name='coverLetter' 
                    className='page-two-text-area'>    
                </textarea>
                {errorHandle.coverLetter && <p className='application-error margin'>Please provide information.</p>}
                <h4>Please list below any prior job experience(s).</h4>
                <textarea 
                    value={obj.jobExperience} 
                    onClick={() => setErrorHandle({...errorHandle, jobExperience: false})} 
                    onChange={changeHandler} 
                    name='jobExperience'  
                    className='page-two-text-area'>    
                </textarea>
                {errorHandle.jobExperience && <p className='application-error'>This field cannot be empty.</p>}
            </form>
            <div className='button-container two'>
                <button onClick={() => setStep(1)}>&larr; Back</button>
                <button onClick={next}>Next &rarr;</button>
            </div>
        </div>
    )
}


export default Step2