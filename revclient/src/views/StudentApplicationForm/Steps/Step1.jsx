import React from 'react'


const Step1 = ({chosenTrade, setChosenTrade, setStep, trades, obj, setObj, errorHandle, setErrorHandle}) => {

    const next = e => {
        if(obj.trade.length === 0) {
            setErrorHandle({...errorHandle, trade: true})
        } else {
            setStep(2)
        }  
    }

    return (
        <>
            <h2 className='title'>Tell Who You Are</h2>
            <form>
                <div className='welcome-container'>
                    <h2>Hey [will be dynamic]</h2>
                </div>
                <select onChange={(e) => {setChosenTrade(true); setObj({...obj, trade: e.target.value}); setErrorHandle({...errorHandle, trade: false})}}>
                    <option selected disabled>Choose Your Trade</option>
                    {trades.map(each => <option value={each.id} key={each.id}>{each.name}</option>)}
                </select>
                {errorHandle.trade && <p className='application-error'>Please choose your trade.</p>}
            </form>
            {chosenTrade && 
            <div>
                <h4>Are you licensed in this trade?</h4>
                <form className='radio-form'>
                    <input onClick={() => setObj({...obj, licensed: true})} type='radio' name='choice'/>
                    <label>Yes</label>
                    <input defaultChecked onClick={() => setObj({...obj, licensed: false})} type='radio' name='choice'/>
                    <label>No</label>
                </form>
            </div>}
            <div className='button-container'>
                <button onClick={next}>Next &rarr;</button>
            </div>   
        </>
    )
}

export default Step1