import { PageType } from '../types';

export type PageStoreState = {
    is_fetching: boolean,
    errors: any[],
    page: PageType,
};

export const emptyPage =  {
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

const defaultState: PageStoreState = {
    is_fetching: false,
    errors: [],
    page: emptyPage
};

export default defaultState;