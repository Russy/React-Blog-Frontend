import defaultState, { TagsStoreState } from './state';
import * as actions from './actions';

export const tags = (state: TagsStoreState = defaultState, {type, payload}) => {

    switch (type) {
        case 'GET_TAGS_REQUEST':
            return {
                ...state,
                is_fetching: true
            };
        case 'GET_TAGS_SUCCESS':
            return {
                ...state,
                tags: payload,
                is_fetching: false,
            };

        case 'POST_TAGS_REQUEST':
            return {
                ...state,
                is_fetching: true
            };
        case 'POST_TAGS_SUCCESS':
            return {
                ...state,
                tags: [...state.tags, payload],
                is_fetching: false,
            };

        case 'DELETE_TAG_REQUEST':
            return {
                ...state,
                is_fetching: true
            };
        case 'DELETE_TAG_SUCCESS':
            return {
                ...state,
                tags: state.tags.filter( tag => tag.id !== payload),
                is_fetching: false,
            };

        default:
            return state;
    }
};