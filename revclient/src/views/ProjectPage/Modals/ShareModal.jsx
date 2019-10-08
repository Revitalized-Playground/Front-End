import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import fb from '../../../assets/AuthPages/fb-logo.png';
import twtr from '../../../assets/AuthPages/twitter.png';



const ShareModal = ({val, setModalVal, copied, setCopied, modalVal}) => {

    return (

        <div onClick={val} className={!modalVal ? 'none' : 'modal'}>
                <div className="inner-modal">
                    <div className="button-div">
                        <div className="outer" onClick={() => setModalVal(false)}>
                            <div className="inner" onClick={() => setModalVal(false)}>
                                <label onClick={() => setModalVal(false)}>Back</label>
                            </div>
                        </div>
                    </div>
                    <h2>Share with Family, Friends, Communities, & More</h2>
                    <h4>Fundraise on social networks, email, and more!</h4>
                    <div className="lines"></div>
                    <div className="logos">
                        <div>
                            <img src={fb} alt="Facebook Logo" />
                            <p>Facebook</p>
                        </div>
                        <div>
                            <img src={twtr} alt="Twitter Logo" />
                            <p>Twitter</p>
                        </div>
                        <div>
                            <img alt="LinkedIn Logo" />
                            <p>LinkedIn</p>
                        </div>
                        <div>
                            <img alt="Email Logo" />
                            <p>Email</p>
                        </div>
                        <div>
                            <img alt="Slack Logo" />
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