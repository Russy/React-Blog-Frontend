import Store from '../store';
import { PostStoreState } from './state';
export const getPost = (Store) => Store.post.post;
export const getIsFetching = (Store) => Store.post.is_fetching;