import { PageType, Pagination, PostType } from '../types';

export type PagesStoreState = {
    is_fetching: boolean,
    errors: any[],
    pages: PageType[],
    pagination: Pagination
};

const defaultState: PagesStoreState = {
    is_fetching: false,
    errors: [],
    pages: [],
    pagination: {
        per_page: 0,
        current_page: 0,
        last_page: 0,
        total: 0
    }
};

export default defaultState;