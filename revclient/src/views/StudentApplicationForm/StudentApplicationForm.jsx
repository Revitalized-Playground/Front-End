import React, {useState, useEffect} from 'react'
import './StudentApplicationForm.scss'
import swirly from '../../assets/StudentApplicationWizard/swirly.png'
import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'
import Step3 from './Steps/Step3'
import large from '../../assets/StudentApplicationWizard/large.svg'
import med from '../../assets/StudentApplicationWizard/med.svg'
import small from '../../assets/StudentApplicationWizard/small.svg'

import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_PROJECT_BY_SLUG } from '../../graphql/queries/Projects'
import { APPLY_TO_PROJECT } from '../../graphql/mutations/Project'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const ApplicationForm = (props) => {
    const [chosenTrade, setChosenTrade] = useState(false)
    const [step, setStep] = useState(1)
    const [obj, setObj] = useState({})
    const [errorHandle, setErrorHandle] = useState({
        trade: false,
        coverLetter: false,
        jobExperience: false,
        eduaction: false,
        availability: false
    })

    const {loading, error, data} = useQuery(GET_PROJECT_BY_SLUG, {
        variables: {slug: props.match.params.name}
    })
    const [apply] = useMutation(APPLY_TO_PROJECT)



    useEffect(() => {
        if(data) {
            setObj({
                project: data.projectBySlug.id,
                trade: '',
                licensed: false,
                coverLetter: '',
                jobExperience: '',
                education: '',
                availability: ''
            })
        }

    }, [data])


    const submit = async () => {
        const applied = await apply({variables: {data: obj}})

        console.log('applied',applied)
    }
    



    if (loading || !data) {
		return (
			<>
				<LoadingSpinner />
			</>
		);
    }
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
                    <img src={large} alt='' className='large' />
                    <img src={med} alt='' className='med' />
                    <img src={small} alt='' className='small' />
                </div>
            </div>
            <div className='right-div'>
                <div className='right-div-content'>
                    {step === 1 
                    ?
                    <Step1 trades={data.projectBySlug.trades} setStep={setStep} chosenTrade={chosenTrade} setChosenTrade={setChosenTrade} obj={obj} setObj={setObj} errorHandle={errorHandle} setErrorHandle={setErrorHandle}/>
                    : step === 2
                    ?
                    <Step2 setStep={setStep} obj={obj} setObj={setObj} errorHandle={errorHandle} setErrorHandle={setErrorHandle} />
                    : step === 3
                    ?
                    <Step3 setStep={setStep} obj={obj} setObj={setObj} submit={submit} errorHandle={errorHandle} setErrorHandle={setErrorHandle} />
                    :
                    null
                    }
                </div>
            </div>
        </div>
    )
}

export default ApplicationForm