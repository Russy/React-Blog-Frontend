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
        default:
            return state;
    }
};