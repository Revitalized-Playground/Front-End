/* eslint-disable import/prefer-default-export */
import { 
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
} from '../constants';

import queryGetUsers from './getUsers.graphql';

export const getUsers = () => {
  return async (dispatch, { client, history }) => {
    dispatch({
      type: GET_USERS_START,
    });

    try {
      // WARNING !!
      // do not use client.networkInterface except if you want skip Apollo store
      // use client.query if you want benefit from Apollo caching mechanisms
      const { data } = await client.query({
        query: queryGetUsers,
        variables: { },
      });
      // const messages = data.users.reduce((msgs, msg) => {
      //   msgs[msg.id] = msg.message; // eslint-disable-line no-param-reassign
      //   return msgs;
      // }, {});
      const users = data.users;
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: {
          users
        },
      });
      return;
    }
    catch (error) {
      dispatch({
        type: GET_USERS_FAILURE,
        payload: {
          error
        },
      });
      return null;
    }
  };
}
  
  
  