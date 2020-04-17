import { Pagination, PostType } from '../types';

export type PostsStoreState = {
    is_fetching: boolean,
    errors: any[],
    posts: PostType[],
    pagination: Pagination
};

const defaultState: PostsStoreState = {
    is_fetching: false,
    errors: [],
    posts: [],
    pagination: {
        per_page: 0,
        current_page: 0,
        last_page: 0,
        total: 0
    }
};

export default defaultState;