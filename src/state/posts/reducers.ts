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
                posts: payload.data,
                is_fetching: false,
                pagination: {
                    per_page: payload.per_page,
                    current_page: payload.current_page,
                    last_page: payload.last_page,
                    total: payload.total
                }
            };
        default:
            return state;
    }
};