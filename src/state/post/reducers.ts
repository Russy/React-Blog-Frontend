import defaultState, { PostStoreState } from './state';
import * as action from './actions';

export const post = (state: PostStoreState = defaultState, {type, payload}) => {
    switch (type) {
        case 'GET_POST_REQUEST':
            return {
                ...state,
                is_fetching: true
            };
            case 'GET_EDIT_POST_REQUEST':
            return {
                ...state,
                is_fetching: true
            };
        case 'GET_POST_SUCCESS':
            return {
                ...state,
                post: payload,
                is_fetching: false
            };
        default:
            return state;
    }
};