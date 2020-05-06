import defaultState, { emptyPost, PostStoreState } from './state';
import * as action from './actions';
import ts from 'typescript/lib/tsserverlibrary';

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
            case 'POST_EDIT_POST_REQUEST':
            return {
                ...state,
                is_fetching: true
            };
            case 'POST_EDIT_POST_SUCCESS':
            return {
                ...state,
                is_fetching: false
            };
        case 'GET_POST_SUCCESS':
            return {
                ...state,
                post: payload,
                is_fetching: false
            };
        case 'GET_EMPTY_POST_REQUEST':
            return {
                ...state,
                post: emptyPost,
                is_fetching: false
            };
        case 'CLEAR_POST_REQUEST':
            return {
                ...state,
                post: defaultState.post,
                is_fetching: false
            };
        case 'DELETE_TAG_REQUEST':
            return {
                ...state,
                post: {
                    ...state.post,
                    tags: state.post.tags.filter(tag => tag.id !== payload)
                }
            };
        default:
            return state;
    }
};