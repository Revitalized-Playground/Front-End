import React, {useState, useEffect} from 'react'
import paypal from '../../../assets/ProjectPage/paypal-logo.png'
import { withRouter } from 'react-router-dom';
import CurrencyInput from 'react-currency-input'


import { injectStripe, CardNumberElement, CardExpiryElement, CardCvcElement } from 'react-stripe-elements';

import { useMutation } from '@apollo/react-hooks';
import { DONATE_TO_PROJECT } from '../../../graphql/mutations';


const DonateModal = ({id, update,donateModal, setDonateModal, donateModalBlur, stripe, match}) => {
    const [amount, setAmount] = useState('');
    const [focused, setFocused] = useState(false)
    const [donateToProject, {data}] = useMutation(DONATE_TO_PROJECT);
    const [error, setError] = useState({
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
        setError({...error, amount: false, [e.elementType]: {blurComplete: false, error: !e.error ? '' : e.error.message, complete: e.complete}})
    }

    const errorSetter = e => {
        setError({...error, [e.elementType]: {...error[e.elementType], blurComeplete: true}})
    }

    const handleChange = (e, value, value2) => {
        setAmount(e.target.value)
    }

    
	async function handleSubmit(e) {
		e.preventDefault();
        const { token } = await stripe.createToken({ name: 'Name here' }); 
        const newAmount = Number(amount)

        if(newAmount < 0.50) {
            window.alert('Can\'t donate less than $0.50')
        } else {
            
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
            update(Number(amount))
        }
    }, [data])
   
    
    return (
        <div onClick={donateModalBlur} className={donateModal ? 'donate-modal' : 'none'}>
            <div className='exit-button'>
                <div className="button-div">
                        <div className="outer" onClick={() => setDonateModal(false)}>
                            <div className="inner" onClick={() => setDonateModal(false)}>
                                <label onClick={() => setDonateModal(false)}>Back</label>
                            </div>
                        </div>
                    </div>
                <div className='inner-donate-modal'>
                    
                    <h2>$ Amount</h2>
                    <form className='donate-form'>
                        <div className="flex">
                            <div className="currency" style={{color: amount.length > 0 ? 'black' : null}}>$</div>
                            <CurrencyInput 
                                value={amount}
                                style={{color: amount.length <= 0 ? 'gray' : null}}
                                onChangeEvent={(e) => {handleChange(e); errorChecker(e)}}
                                // onBlur={() => setFocused(amount.length > 0? true: false)}
                                onClick={() => setFocused(true)}
                            />
                        </div>
                        {error.amount && <p className='card-error'>Please Provide a Donation Amount!</p>}
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
                        {!error.cardNumber.blurComplete && <p className='card-error'>{error.cardNumber.error}</p>}
                    </div>
                    <div className='expiration-cvc-container'>
                        <div className='expiration'>
                            <p>Expiration</p>
                            <CardExpiryElement onChange={errorChecker} style={{base:{fontSize: '20px'}}} className='expiration-input' />
                            {!error.cardExpiry.blurComplete && <p className='card-error'>{error.cardExpiry.error}</p>}
                        </div>
                        <div className='cvc'>
                            <p>CVC</p>
                            <CardCvcElement onChange={errorChecker} style={{base:{fontSize: '20px'}}} className='cvc-input' />
                            {!error.cardCvc.blurComplete && <p className='card-error'>{error.cardCvc.error}</p>}
                        </div>
                        
                    </div>
                    <button onClick={handleSubmit} className='submit-donate'>Donate</button>
                </div>
            </div>
        </div>
    )
}


export default withRouter(injectStripe(DonateModal))
