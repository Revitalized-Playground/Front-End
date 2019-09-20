import { 
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
  } from '../constants';

const intitialState = {
    users:""
}
  
export default function getUsersReducer(state = intitialState, action) {
    switch (action.type) {
        case GET_USERS_START:
            return {
                ...state,
                fetching:true,
            };

        case GET_USERS_SUCCESS:
            return {
                ...state,
                fetching:false,
                users: action.payload.value,
            };

        case GET_USERS_FAILURE:
            return {
                ...state,
                error: action.error,
            };

        default:
            return state;
    }
}
  