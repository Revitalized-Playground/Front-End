// import axios from 'axios';
import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_USER = 'LOGOUT_USER';

export const FETCH_USERS_START = 'FETCH_USERS_START';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';




export const getUsers = dispatch => {

    return (
        <Query
            query={gql`{
                users {
                    id
                    firstName
                    lastName
                    password
                }
            }`}
        >
            {({ loading, error, data }) => {
                
                console.log(data);
                if (loading) return (
                    dispatch({ 
                        type: LOGIN_START, 
                        payload: loading
                    })
                );

                if (error) return (
                    dispatch({ 
                        type: LOGIN_FAILURE, 
                        payload: error
                    })
                );
                
                return (
                    
                    dispatch({ 
                        type: LOGIN_SUCCESS, 
                        payload: data
                    })
                )

            }}

        </Query>
    )

    // return axios
    //     .post('', credentials)
    //     .then(response => {
    //         dispatch({ 
    //             type: LOGIN_SUCCESS, 
    //             payload: response.data
    //         });
    //     })
    //     .catch(error => {
    //         dispatch({ 
    //             type: LOGIN_FAILURE, 
    //             payload: error.message
    //         });
    //     })
}


// export const getUsers = () => dispatch => {
//     dispatch({
//         type: FETCH_USERS_START
//     })
//     axios
//         .get(
//             'http://localhost:3333/v1/users', {
//                 headers: { 
//                     Authorization: localStorage.getItem('token') 
//                 }
//             }
//         )
//         .then(response => {
//             dispatch({
//                 type: FETCH_USERS_SUCCESS,
//                 payload: response.data,
//             })
//         })
//         .catch(error => {
//             dispatch({
//                 type: FETCH_USERS_FAILURE,
//                 payload: error.message,
//             })
//         })
// }


// export const logoutUser = () => dispatch => {
//     dispatch({
//         type: LOGOUT_USER,
//     })
// }




