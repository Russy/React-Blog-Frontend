import Store from '../store';
import { PageStoreState } from './state';
export const getPage = (Store) => Store.page.page;
export const getIsFetching = (Store) => Store.page.is_fetching;