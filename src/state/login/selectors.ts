import { StoreState } from '../types';
export const getErrors = (Store: StoreState) => Store.login.errors;
