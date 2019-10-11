import React, {useState} from 'react'
import paypal from '../../../assets/ProjectPage/paypal-logo.png'
import { withRouter } from 'react-router-dom';


import { injectStripe, CardNumberElement, CardExpiryElement, CardCvcElement } from 'react-stripe-elements';

import { useMutation } from '@apollo/react-hooks';
import { DONATE_TO_PROJECT } from '../../../graphql/mutations';


const DonateModal = ({update, bool, setBool, donateModal, setDonateModal, donateModalBlur, stripe, match}) => {
    const [amount, setAmount] = useState('$');
    const [donateToProject] = useMutation(DONATE_TO_PROJECT);
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

    const handleChange = e => {
        const checker = e.target.value.split(' ')[1]
        if(e.target.value === '$'){return;} 
        if(isNaN(Number(checker)) === true && e.target.value.length > 2) {return;}
        if(amount.length < 2 && isNaN(Number(e.target.value)) === true) {return;} 
        if(amount === '$' || amount==='') {
            setAmount('$ ' + e.target.value)
        } else {
            setAmount(e.target.value)
        }
        
    }

    const onBlurFunc = e => {
        if(e.target.value === '$ ') {
            setAmount('$')
        }
    }
    
	async function handleSubmit(e) {
		e.preventDefault();
        const { token } = await stripe.createToken({ name: 'Name here' }); 
        const newAmount = amount.split(' ')[1]

        if(amount.length < 3) {
            setError({...error, amount: true})
        } else {
            update(newAmount)
            donateToProject({
                variables: {
                    id: match.params.id,
                    data: {
                        token: token.id,
                        amount: parseInt(newAmount, 10),
                    },
                },
            });
        }
    }
    
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
                        <input 
                          placeholder='$ 5.00'
                          value={amount === '$' ? '' : amount}
                          onChange={(e) => {handleChange(e); errorChecker(e)}}
                          onBlur={onBlurFunc}
                        />
                        {error.amount && <p className='card-error'>Please Provide a Donation Amount!</p>}
                    </form>
                    <div className="mid-line-container">
                        <div className="mid-line"></div>
                        <p>or</p>
                        <div className="mid-line"></div>
                    </div>
                    <div className='donation-suggestions'>
                        <button onClick={() => setAmount('$ ' + 5)}>$5</button>
                        <button onClick={() => setAmount('$ ' + 10)}>$10</button>
                        <button onClick={() => setAmount('$ ' + 20)}>$20</button>
                        <button onClick={() => setAmount('$ ' + 50)}>$50</button>
                        <button onClick={() => setAmount('$ ' + 100)}>$100</button>
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