import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import fb from '../../../assets/AuthPages/fb-logo.png';
import twtr from '../../../assets/AuthPages/twitter.png';
import email from '../../../assets/ProjectPage/email.svg';
import linked from '../../../assets/ProjectPage/linked.png';
import slack from '../../../assets/ProjectPage/slack.png';
import { FaTimes } from 'react-icons/fa';



const ShareModal = ({val, setModalVal, copied, setCopied, modalVal}) => {

    return (

        <div onClick={val} className={!modalVal ? 'none' : 'modal'}>
                <div className="inner-modal">
                    <div className="button-div">
                    <FaTimes onClick={() => {setModalVal(false); setCopied(false)}} className='label'/>
                        {/* <div className="outer" onClick={() => setModalVal(false)}>
                            <div className="inner" onClick={() => setModalVal(false)}>
                                <label onClick={() => setModalVal(false)}>Back</label>
                                
                            </div>
                        </div> */}
                    </div>
                    <h2>Share with Family, Friends, Communities, & More</h2>
                    <h4>Fundraise on social networks, email, and more!</h4>
                    <div className="lines"></div>
                    <div className="logos">
                        <div className='img-container'>
                            <img src={fb} alt="Facebook Logo" />
                            <p>Facebook</p>
                        </div>
                        <div className='img-container'>
                            <img src={twtr} alt="Twitter Logo" />
                            <p>Twitter</p>
                        </div>
                        <div className='img-container'>
                            <img src={linked} alt="LinkedIn Logo" />
                            <p>LinkedIn</p>
                        </div>
                        <div className='img-container'>
                            <img className='email' src={email} alt="Email Logo" />
                            <p>Email</p>
                        </div>
                        <div className='img-container'>
                            <img src={slack} alt="Slack Logo" />
                            <p>Slack</p>
                        </div>
                    </div>
                    <div className="lines"></div>
                    <form>
                        <p>Copy Link</p>
                        <div>
                            <CopyToClipboard text={window.location.href}>
                                <input
                                    name="link"
                                    defaultValue={window.location.href}
                                    onClick={e => {
                                        e.preventDefault();
                                        setCopied(true);
                                    }}
                                />
                            </CopyToClipboard>
                            <CopyToClipboard text={window.location.href}>
                                {copied ? (
                                    <button disabled={true} className="copied">
                                        Copied!
                                    </button>
                                ) : (
                                    <button
                                        onClick={e => {
                                            e.preventDefault();
                                            setCopied(true);
                                        }}
                                    >
                                        Copy
                                    </button>
                                )}
                            </CopyToClipboard>
                        </div>
                    </form>
                </div>
            </div>
    
    )
}

export default ShareModal