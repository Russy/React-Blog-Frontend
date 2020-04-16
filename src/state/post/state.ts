import { PostType } from '../types';

export type PostStoreState = {
    is_fetching: boolean,
    errors: any[],
    post: PostType,
};

const defaultState: PostStoreState = {
    is_fetching: false,
    errors: [],
    post: {
        id: 0,
        title: '',
        content: '',
        excerpt: '',
        icon: '',
        slug: '',
        is_published: 0,
        updated_at: '',
        tags: [],
        categories: []
    }
};

export default defaultState;