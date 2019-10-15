import React, { useState } from 'react';
import { MdArrowBack, MdClose } from "react-icons/md";

import { useMutation } from "@apollo/react-hooks";
import { CREATE_PROJECT_TRADE } from '../../../../../graphql/mutations';


const AddTrade = props => {
    const { setAddTradeModal, projectId } = props;

    const [ createProjectTrade ] = useMutation( CREATE_PROJECT_TRADE );
    const [ addTradeState, setAddTradeState ] = useState({
        project: projectId,
        name:"",
        description:""
    })

    const submitAddTrade = async event => {
        event.preventDefault();
		
        const created = await createProjectTrade({ variables: { data: addTradeState } });

        setAddTradeState({ ...addTradeState, project: "", name: "", description: "" })
		setAddTradeModal({ show: false });
    };


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

