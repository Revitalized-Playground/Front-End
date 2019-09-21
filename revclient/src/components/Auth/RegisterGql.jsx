import React, { useState } from 'react';
import { 
    useMutation, 
    // useQuery,
} from "@apollo/react-hooks";
import { 
    CREATE_USER,
} from "../../../graphql/mutations";


const RegisterGql = () => {
    const [ createUser ] = useMutation(CREATE_USER);

    const [state, setState] = useState({
        email:"",
        password:"",
    });

    const handleChanges = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async event => {
        event.preventDefault();
        localStorage.setItem("token", "");
        const created = await createUser({ variables: { data: state } });
        setState({
            email:"",
            password:"",
        })
        localStorage.setItem("token", created.data.createUser.token);
    }

    return (
        <section className="register-form">
            <h5>Register GQL</h5>
            <form 
                onSubmit={handleSubmit}
            >
                <input 
                    name='email'
                    type='email'
                    placeholder='email@domain.tld...'
                    value={state.email}
                    onChange={handleChanges}
                />
                <input 
                    name='password'
                    type='password'
                    placeholder='Password'
                    value={state.password}
                    onChange={handleChanges}
                />
                <button></button>
            </form>
        </section>
    );
}


export default RegisterGql

