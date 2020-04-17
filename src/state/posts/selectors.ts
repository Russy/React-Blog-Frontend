import { StoreState } from '../types';
export const getPosts = (Store: StoreState) => Store.posts.posts;
export const getIsFetching = (Store: StoreState) => Store.posts.is_fetching;
export const getPagination = (Store: StoreState) => Store.posts.pagination;