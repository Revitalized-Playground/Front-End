import {
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_USER
} from '../actions';


const initialState = {
   users: [],
   loggedInUser: {},
   fetching: false,
   logout: false,
   error: null
}

export const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_START:
            return {
                ...state,
                fetching: true,
                logout: false
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                fetching: false,
                users: action.payload,
                error: null,
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }
        case LOGIN_START:
            return {
                ...state,
                fetching: true,
                logout: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                fetching: false,
                loggedInUser: action.payload,
                error: null,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                fetching: false,
                error: action.payload,
            }
        case LOGOUT_USER:
            return {
                ...state,
                users: '',
                loggedInUser: {},
                fetching: false,
                logout: true,
                error: null,
            }
        default:
            return state;
            
    }
}

