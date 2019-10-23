import React, {  } from 'react';
import { MdClose } from "react-icons/md";



const AddTrade = props => {
    const { 
        setAddTradeState, 
        addTradeState, 
        submitAddTrade,
        setAddTradeModal, 

    } = props;

    console.log("Props in addtrade", props)
    return (
        <>
            <section 
                className="add-trade-container" 
            >
                <div className="add-trade-card">
                    
                    <div className="add-trade-actions">
                        <MdClose onClick={() => setAddTradeModal({ show: false })} />
                    </div>

                    <h3>Add Trade</h3>
                    <form onSubmit={submitAddTrade} >
                        <input 
                            name='name'
                            type='text'
                            placeholder='Name...'
                            value={addTradeState.name}
                            onChange={(event) => setAddTradeState({ ...addTradeState, [event.target.name]:event.target.value })}
                        />
                        <input 
                            name='description'
                            type='text'
                            placeholder='Description...'
                            value={addTradeState.description}
                            onChange={(event) => setAddTradeState({ ...addTradeState, [event.target.name]:event.target.value })}
                        />
                        <div className="add-trade-button-container" >
                            <button className="add-trade-button" onClick={submitAddTrade} >
                                Submit
                            </button>
                        </div>
                    </form>
                  
                </div>

            </section>
        </>
    );
}


export default AddTrade




