import React, { useState } from 'react';
import { MdArrowBack, MdClose } from "react-icons/md";

import { useMutation } from "@apollo/react-hooks";
import { CREATE_PROJECT_TRADE } from '../../../../../graphql/mutations';


const AddTrade = props => {
    const { setAddTrade, addTrade, id } = props;

    const [ createProjectTrade ] = useMutation( CREATE_PROJECT_TRADE );
    const [ addTradeState, setAddTradeState ] = useState({
        project: id,
        name:"",
        description:""
    })

    const submitAddTrade = async event => {
        event.preventDefault();
		
        const created = await createProjectTrade({ variables: { data: addTradeState } });

        setAddTradeState({ ...addTradeState, project: "", name: "", description: "" })
		setAddTrade({ show: false });
    };

    return (
        <>
            <section 
                className="add-trade-container" 
            >
                <div className="add-trade-card">
                    Add Trade
                    <MdClose onClick={() => setAddTrade({ show: false })} />


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
                        <button className="add-trade-button" onClick={submitAddTrade} >
                            Submit
                        </button>
                    </form>
                  
                </div>

            </section>
        </>
    );
}


export default AddTrade

