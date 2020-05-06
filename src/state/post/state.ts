import { PostType } from '../types';

export type PostStoreState = {
    is_fetching: boolean,
    errors: any[],
    post: PostType,
};

export const emptyPost =  {
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

const defaultState: PostStoreState = {
    is_fetching: false,
    errors: [],
    post: emptyPost
};

export default defaultState;