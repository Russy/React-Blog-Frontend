import { StoreState } from '../types';
export const getErrors = (Store: StoreState) => Store.login.errors;
export const isFetching = (Store: StoreState) => Store.login.is_fetching;
