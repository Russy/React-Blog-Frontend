import defaultState, { emptyPage, PageStoreState } from './state';

export const page = (state: PageStoreState = defaultState, {type, payload}) => {
    switch (type) {
        case 'GET_PAGE_REQUEST':
            return {
                ...state,
                is_fetching: true
            };
            case 'GET_EDIT_PAGE_REQUEST':
            return {
                ...state,
                is_fetching: true
            };
            case 'PAGE_EDIT_PAGE_REQUEST':
            return {
                ...state,
                is_fetching: true
            };
            case 'PAGE_EDIT_PAGE_SUCCESS':
            return {
                ...state,
                is_fetching: false
            };
        case 'GET_PAGE_SUCCESS':
            return {
                ...state,
                page: payload,
                is_fetching: false
            };
        case 'GET_EMPTY_PAGE_REQUEST':
            return {
                ...state,
                page: emptyPage,
                is_fetching: false
            };
        case 'CLEAR_PAGE_REQUEST':
            return {
                ...state,
                page: defaultState.page,
                is_fetching: false
            };
        case 'DELETE_TAG_REQUEST':
            return {
                ...state,
                PAGE: {
                    ...state.page,
                }
            };
        default:
            return state;
    }
};