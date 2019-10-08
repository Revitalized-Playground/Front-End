import React from 'react'
import paypal from '../../../assets/ProjectPage/paypal-logo.png'



const DonateModal = ({donateModal, setDonateModal}) => {
    
    return (
        <div className={donateModal ? 'donate-modal' : 'none'}>
            <div className='inner-donate-modal'>
                <h2>$ Amount</h2>
                <form className='donate-form'>
                    <input 
                      placeholder='$ 5.00'
                    />
                </form>
                <div className="mid-line-container">
					<div className="mid-line"></div>
					<p>or</p>
					<div className="mid-line"></div>
				</div>
                <div className='donation-suggestions'>
                    <button>$5</button>
                    <button>$10</button>
                    <button>$20</button>
                    <button>$50</button>
                    <button>$100</button>
                </div>
                <button className='paypal-donate-button'><p>Donate With</p> <img src={paypal} alt='paypal logo'/></button>
                <form className='card-info-form'>
                    <p>Card Number</p>
                    <input 
                        placeholder='1234 5678 9101 1121'
                    />
                    <div className='donate-card-info'>
                        <div className='expiration'>
                            <p>Expiration</p>
                            <input 
                              placeholder='01/21'
                            //   className='expiration'
                            />
                        </div>
                        <div className='cvc'>
                            <p>CVC</p>
                            <input 
                              placeholder='123'
                            /> 
                        </div>
                        
                    </div>
                    <button>Donate</button>
                </form>
            </div>
        </div>
    )
}


export default DonateModal