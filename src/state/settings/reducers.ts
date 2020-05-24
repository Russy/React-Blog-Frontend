import defaultState, { SettingsStoreState } from './state';

export const settings = (state: SettingsStoreState = defaultState, {type, payload}) => {

    switch (type) {
        case 'GET_OPTIONS_REQUEST':
            return {
                ...state,
                is_fetching: true
            };
        case 'POST_OPTIONS_REQUEST':
            return {
                ...state,
                is_fetching: true
            };

        case 'GET_OPTIONS_SUCCESS':
            return {
                ...state,
                is_fetching: false,
                options: payload
            };
        case 'POST_OPTIONS_SUCCESS':
            return {
                ...state,
                is_fetching: false
            };

        default:
            return state;
    }
};