import { PostType } from '../types';

export type PostsStoreState = {
    is_fetching: boolean,
    errors: any[],
    posts: PostType[]
};

const defaultState: PostsStoreState = {
    is_fetching: false,
    errors: [],
    posts: [],
};

export default defaultState;