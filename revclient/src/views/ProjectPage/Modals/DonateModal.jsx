import React, {useState, useEffect} from 'react'
import { withRouter } from 'react-router-dom';
import CurrencyInput from 'react-currency-input'
import { removeCommas } from "../../../helpers/helpers";

import { injectStripe, CardNumberElement, CardExpiryElement, CardCvcElement } from 'react-stripe-elements';
import { FaTimes } from 'react-icons/fa';

// GQL
import { useMutation } from '@apollo/react-hooks';
import { DONATE_TO_PROJECT } from '../../../graphql/mutations';
import { GET_PROJECT_BY_SLUG } from '../../../graphql/queries/Projects';
import '@lottiefiles/lottie-player';


const DonateModal = ({id, setInnerModalDisplay, setModalDisplay,innerModalDisplay, modalDisplay, donateModal, setDonateModal, donateModalBlur, stripe, match}) => {
    const [amount, setAmount] = useState('');
    const [success, setSuccess] = useState(false)
    const [animationSuccess, setAnimationSuccess] = useState(false)
    const [donateToProject, {data, loading }] = useMutation(DONATE_TO_PROJECT, {
        update(cache, {data: {createProjectDonation}},) {
            const { projectBySlug } = cache.readQuery({
                query: GET_PROJECT_BY_SLUG,
                variables: { slug: match.params.slug }
            })
            cache.writeQuery({
                query: GET_PROJECT_BY_SLUG,
                data: { projectBySlug: projectBySlug.donations = createProjectDonation.project.donations }
            })
        }
    });

    const [textError, setError] = useState({
        cardNumber: {
            error: '',
            complete: false,
            blurComplete: false
        },
        cardExpiry: {
            error: '',
            complete: false,
            blurComplete: false
        },
        cardCvc: {
            error: '',
            complete: false,
            blurComplete: false
        },
        amount: false
    })
    
    const errorChecker = e => {
        setError({...textError, amount: false, [e.elementType]: {blurComplete: false, error: !e.error ? '' : e.error.message, complete: e.complete}})
    }

    const errorSetter = e => {
        setError({...textError, [e.elementType]: {...textError[e.elementType], blurComeplete: true}})
    }

    const handleChange = e => {
        setAmount(e.target.value)
    }

    
	async function handleSubmit(e) {
		e.preventDefault();
        const { token } = await stripe.createToken({ name: 'Name here' }); 
        let newAmount = amount
        newAmount = removeCommas(newAmount)
        // console.log("newAmount in DonateModal", newAmount);
        
        if(newAmount < 0.50) {
            window.alert('Can\'t donate less than $0.50')
        } 
        else {
            
            donateToProject({
                variables: {
                    id: id,
                    data: {
                        token: token.id,
                        amount: parseInt(newAmount, 10),
                    },
                },
            });    
        }
    }

    useEffect(() => {
        if(data) {
            setSuccess(true)
            setAnimationSuccess(true)
            setModalDisplay('none')
            setInnerModalDisplay('none')
            setTimeout(() => {setAnimationSuccess(false); setDonateModal(false)}, 2500)
        }
    }, [data])

    useEffect(() => {
        setSuccess(false)
    }, [donateModal])


    return (
        <div onClick={donateModalBlur} className={donateModal ? 'donate-modal' : 'none'}>
            <div className='exit-button'>
                <div style={{display: modalDisplay}} className="button-div">
                <FaTimes onClick={() => setDonateModal(false)} className='label'/>
                        {/* <div className="outer" onClick={() => setDonateModal(false)}>
                            <div className="inner" onClick={() => setDonateModal(false)}>
                                <label onClick={() => setDonateModal(false)}>Back</label>
                            </div>
                        </div> */}
                    </div>
                <div style={{display: innerModalDisplay}} className='inner-donate-modal'>
                    <h2>$ Amount</h2>
                    <form className='donate-form'>
                        <div className="flex">
                            <div className="currency" style={{color: amount.length > 0 ? 'black' : null}}>$</div>
                            <CurrencyInput 
                                value={amount}
                                style={{color: amount.length <= 0 ? 'gray' : null}}
                                onChangeEvent={(e) => {handleChange(e); errorChecker(e)}}
                            />
                        </div>
                        {textError.amount && <p className='card-error'>Please Provide a Donation Amount!</p>}
                    </form>
                    
                    <div className="mid-line-container">
                        <div className="mid-line"></div>
                        <p>or</p>
                        <div className="mid-line"></div>
                    </div>
                    <div className='donation-suggestions'>
                        <button onClick={() => setAmount('5')}>$5</button>
                        <button onClick={() => setAmount('10')}>$10</button>
                        <button onClick={() => setAmount('20')}>$20</button>
                        <button onClick={() => setAmount('50')}>$50</button>
                        <button onClick={() => setAmount('100')}>$100</button>
                    </div>
                    <p>Card Number</p>
                    <div style={{marginBottom: '40px'}}>
                        <CardNumberElement onChange={errorChecker} onBlur={errorSetter} style={{base:{fontSize: '20px', margin: '40px'}}} className='stripe-card' />
                        {!textError.cardNumber.blurComplete && <p className='card-error'>{textError.cardNumber.error}</p>}
                    </div>
                    <div className='expiration-cvc-container'>
                        <div className='expiration'>
                            <p>Expiration</p>
                            <CardExpiryElement onChange={errorChecker} style={{base:{fontSize: '20px'}}} className='expiration-input' />
                            {!textError.cardExpiry.blurComplete && <p className='card-error'>{textError.cardExpiry.error}</p>}
                        </div>
                        <div className='cvc'>
                            <p>CVC</p>
                            <CardCvcElement onChange={errorChecker} style={{base:{fontSize: '20px'}}} className='cvc-input' />
                            {!textError.cardCvc.blurComplete && <p className='card-error'>{textError.cardCvc.error}</p>}
                        </div>
                        
                    </div>
                    <button onClick={handleSubmit} className='submit-donate'>Donate</button>
                    {success && <p className='donate-success-text'>Successfully Donated!</p>}

                    {loading && <p style={{color: 'black'}} className='donate-success-text'>Processing your request...</p>}
                </div>
                {animationSuccess &&
                <lottie-player
                        autoplay
                        mode="normal"
                        src="https://assets8.lottiefiles.com/datafiles/OivQWebdu3tdxIt/data.json"
                        style={{position: 'fixed', margin: '0 auto', left: '0', top: '0', width: '100%', height: '100vh'}}
                    >
                </lottie-player>
                }
            </div>
        </div>
    )
}


export default withRouter(injectStripe(DonateModal))