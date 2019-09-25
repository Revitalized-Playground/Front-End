import React from 'react'
import styled from 'styled-components';
 


const Donate = ({raised, budget, donors}) => {
    const percent = Number(raised) / Number(budget) * 100
    const Box = styled.div`
    height: 12px;
          background: #0B096F;
          border-radius: 50px;
          
          @keyframes pulse {
              0% {
                  width: 0;
                  background: #0B096F;
                  }
              100% {
                  width: ${raised > budget ? 100 : percent}%;
                        
          }              
      }
      width: ${raised > budget ? 100 : percent}%;
      animation: 1s ease-out pulse;
  `

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function formatter(num) {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
    }

    return (
        <div className='donateContainer'>
            <div className='donateInnerDiv'>
                <p className='donationMoney'><span className='large'>${numberWithCommas(raised)}</span> <span className='small'>raised out of ${numberWithCommas(budget)}</span></p>
                <div className='progressBar'><Box></Box></div>
                <p className='donatorCount'>{formatter(donors)}</p>
                <p className='donorText'>Donors</p>
                <div className='donationButtons'>
                    <button className='purple'>Donate now</button>
                    <button className='white'>Share</button>
                </div>
                <div className="loginMiddle">
					<div className="loginLine"></div>
					<p>or</p>
					<div className="loginLine"></div>
				</div>
                <div className='apply-button'>
                    <button >Apply to Project</button>
                </div>
                
                <p className='lastText'>Partner with growing donors who are eager to see the transformation and economical growth of Detroit.</p>
            </div>
            
        </div>
    )
}

export default Donate