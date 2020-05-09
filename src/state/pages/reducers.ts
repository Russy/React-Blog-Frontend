import defaultState, { PagesStoreState } from './state';
import * as actions from './actions';

export const pages = (state: PagesStoreState = defaultState, {type, payload}) => {

    switch (type) {
        case 'GET_PAGES_REQUEST':
            return {
                ...state,
                is_fetching: true
            };
        case 'GET_ADMIN_PAGES_REQUEST':
            return {
                ...state,
                is_fetching: true
            };
        case 'GET_PAGES_BY_TAG_REQUEST':
            return {
                ...state,
                is_fetching: true
            };
        case 'SEARCH_PAGES_REQUEST':
            return {
                ...state,
                is_fetching: true
            };
        case 'GET_PAGES_SUCCESS':
            return {
                ...state,
                pages: payload.data,
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