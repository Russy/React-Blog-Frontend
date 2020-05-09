import { StoreState } from '../types';
export const getPages = (Store: StoreState) => Store.pages.pages;
export const getIsFetching = (Store: StoreState) => Store.pages.is_fetching;
export const getPagination = (Store: StoreState) => Store.pages.pagination;