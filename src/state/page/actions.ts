import { PageType, PostType } from '../types';
export const GET_PAGE_REQUEST = (slug: string) => ({ type: 'GET_PAGE_REQUEST', payload: slug});
export const GET_PAGE_SUCCESS = (page: PageType) => ({ type: 'GET_PAGE_SUCCESS', payload: page});
export const GET_PAGE_FAILED = () => ({ type: 'GET_PAGE_FAILED'});

export const GET_EDIT_PAGE_REQUEST = (slug: string) => ({ type: 'GET_EDIT_PAGE_REQUEST', payload: slug});
export const GET_EDIT_PAGE_SUCCESS = (page: PageType) => ({ type: 'GET_EDIT_PAGE_SUCCESS', payload: page});
export const GET_EDIT_PAGE_FAILED = () => ({ type: 'GET_EDIT_PAGE_FAILED'});

export const PAGE_EDIT_PAGE_REQUEST = (page: PageType) => ({ type: 'PAGE_EDIT_PAGE_REQUEST', payload: page});
export const PAGE_EDIT_PAGE_SUCCESS = (page: PageType) => ({ type: 'PAGE_EDIT_PAGE_SUCCESS', payload: page});
export const PAGE_EDIT_PAGE_FAILED = () => ({ type: 'PAGE_EDIT_PAGE_FAILED'});

export const CLEAR_PAGE_REQUEST = () => ({ type: 'CLEAR_PAGE_REQUEST'});
export const GET_EMPTY_PAGE_REQUEST = () => ({ type: 'GET_EMPTY_PAGE_REQUEST'});

export const PAGE_DELETE_REQUEST = (page: number) => ({ type: 'PAGE_DELETE_REQUEST', payload: page});
export const PAGE_DELETE_SUCCESS = () => ({ type: 'PAGE_DELETE_SUCCESS'});
