import defaultState, { LoginStoreState } from './state';
import * as action from './actions';

export const login = (state: LoginStoreState = defaultState, {type, payload}) => {
    switch (type) {
        case 'GET_LOGIN_REQUEST':
            return {
                ...state,
                is_fetching: true,
                errors: []
            };
        case 'GET_LOGIN_FAILED':
            return {
                ...state,
                is_fetching: false,
                errors: [payload]
            };
        case 'GET_LOGIN_SUCCESS':
            return {
                ...state,
                errors: [],
                is_fetching: false
            };
        default:
            return state;
    }
};