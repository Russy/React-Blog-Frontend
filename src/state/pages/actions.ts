import { PostType } from '../types';

export const GET_PAGES_REQUEST = () => ({ type: 'GET_PAGES_REQUEST'});
export const GET_PAGES_SUCCESS = (pages: any) => ({ type: 'GET_PAGES_SUCCESS', payload: pages});
export const GET_PAGES_FAILED = () => ({ type: 'GET_PAGES_FAILED'});

export const SEARCH_PAGES_REQUEST = (query: string) => ({ type: 'SEARCH_PAGES_REQUEST', payload: query});
export const SEARCH_PAGES_SUCCESS = (pages: any) => ({ type: 'SEARCH_PAGES_SUCCESS', payload: pages});
export const SEARCH_PAGES_FAILED = () => ({ type: 'SEARCH_PAGES_FAILED'});

export const GET_PAGES_BY_TAG_REQUEST = (tag: number | undefined, page: number | undefined) => ({ type: 'GET_PAGES_BY_TAG_REQUEST', payload: {tag, page}});
export const GET_PAGES_BY_TAG_FAILED = () => ({ type: 'GET_PAGES_BY_TAG_FAILED'});

export const GET_ADMIN_PAGES_REQUEST = (page: number | undefined) => ({ type: 'GET_ADMIN_PAGES_REQUEST', payload: page});
export const GET_ADMIN_PAGES_FAILED = () => ({ type: 'GET_ADMIN_PAGES_FAILED'});
