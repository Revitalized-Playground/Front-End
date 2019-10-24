import React, {useState, useEffect} from 'react'
import './StudentApplicationForm.scss'
import swirly from '../../assets/StudentApplicationWizard/swirly.png'
import Step1 from './Steps/Step1'
import Step2 from './Steps/Step2'
import Step3 from './Steps/Step3'
import large from '../../assets/StudentApplicationWizard/large.svg'
import med from '../../assets/StudentApplicationWizard/med.svg'
import small from '../../assets/StudentApplicationWizard/small.svg'

import { useQuery } from '@apollo/react-hooks';
import { GET_PROJECT_BY_SLUG } from '../../graphql/queries/Projects'

import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

import {withRouter} from 'react-router-dom'

import Nav from '../../components/Layout/Nav'

const ApplicationForm = (props) => {
    const [chosenTrade, setChosenTrade] = useState(false)
    const [step, setStep] = useState(1)
    const [obj, setObj] = useState({})
    const [animation, setAnimation] = useState(false)
    const [errorHandle, setErrorHandle] = useState({
        trade: false,
        coverLetter: false,
        jobExperience: false,
        eduaction: false,
        availability: false
    })

    const {loading, data, refetch} = useQuery(GET_PROJECT_BY_SLUG, {
        variables: {slug: props.match.params.name}
    })


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


  
    



    if (loading || !data) {
		return (
			<>
				<LoadingSpinner />
			</>
		);
    } else if(animation) {
        return <lottie-player
                    autoplay
                    mode="normal"
                    src="https://assets8.lottiefiles.com/datafiles/OivQWebdu3tdxIt/data.json"
                    style={{position: 'fixed', margin: '0 auto', left: '0', top: '0', width: '100%', height: '100vh'}}
                >
        </lottie-player>
    }
    return(

        <>
        <Nav />
        <div className='student-application-form-container'>
            
            <div style={{backgroundImage: `url(${swirly})`}} className='swirly-div'>
                <div  className='student-app-steps'>
                    <h3 style={{color: step === 1 ? 'white' : null}}>Step 1</h3>
                    <h3 style={{color: step === 2 ? 'white' : null}}>Step 2</h3>
                    <h3 style={{color: step === 3 ? 'white' : null}}>Step 3</h3>
                    {/* <h3 style={{color: step === 4 ? 'white' : null}}>Step 4</h3>
                    <h3 style={{color: step === 5 ? 'white' : null}}>Step 5</h3>  */}
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
                    <Step3  refetch={refetch} setAnimation={setAnimation} setStep={setStep} obj={obj} setObj={setObj} errorHandle={errorHandle} setErrorHandle={setErrorHandle} />
                    :
                    null
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default withRouter(ApplicationForm)