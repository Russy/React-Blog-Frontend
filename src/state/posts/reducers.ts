import defaultState, { PostsStoreState } from './state';
import * as actions from './actions';

export const posts = (state: PostsStoreState = defaultState, {type, payload}) => {

    switch (type) {
        case 'GET_POSTS_REQUEST':
            return {
                ...state,
                is_fetching: true
            };
        case 'GET_POSTS_SUCCESS':
            return {
                ...state,
                posts: payload,
                is_fetching: false
            };
        default:
            return state;
    }
};