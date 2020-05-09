import { PostsStoreState } from './posts/state';
import { PostStoreState } from './post/state';
import { LoginStoreState } from './login/state';
import { TagsStoreState } from './tags/state';
import { PagesStoreState } from './pages/state';
import { PageStoreState } from './page/state';

export interface StoreState {
    readonly posts: PostsStoreState;
    readonly post: PostStoreState;
    readonly login: LoginStoreState;
    readonly tags: TagsStoreState;
    readonly pages: PagesStoreState;
    readonly page: PageStoreState;
}

export type TagType = {
    id: number,
    title: string,
    slug: string
}
export type CategoryType = {
    id: number,
    title: string,
    slug: string
}

export type PostType = {
    id: number,
    title: string,
    content: string,
    excerpt: string,
    icon: string,
    slug: string,
    is_published: number,
    updated_at: string,
    tags: TagType[],
    categories: CategoryType[]
}

export type Pagination =  {
    per_page: number;
    current_page: number;
    last_page: number;
    total: number;
}

export type PageType = {
    id: number,
    title: string,
    content: string,
    excerpt: string,
    icon: string,
    slug: string,
    is_published: number,
    updated_at: string,
}