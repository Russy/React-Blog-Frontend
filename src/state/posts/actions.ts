import { PostType } from '../types';

export const GET_POSTS_REQUEST = (page: number | undefined) => ({ type: 'GET_POSTS_REQUEST', payload: page});
export const GET_POSTS_SUCCESS = (posts: any) => ({ type: 'GET_POSTS_SUCCESS', payload: posts});
export const GET_POSTS_FAILED = () => ({ type: 'GET_POSTS_FAILED'});

export const SEARCH_POSTS_REQUEST = (query: string) => ({ type: 'SEARCH_POSTS_REQUEST', payload: query});
export const SEARCH_POSTS_SUCCESS = (posts: any) => ({ type: 'SEARCH_POSTS_SUCCESS', payload: posts});
export const SEARCH_POSTS_FAILED = () => ({ type: 'SEARCH_POSTS_FAILED'});

export const GET_POSTS_BY_TAG_REQUEST = (tag: number | undefined, page: number | undefined) => ({ type: 'GET_POSTS_BY_TAG_REQUEST', payload: {tag, page}});
export const GET_POSTS_BY_TAG_FAILED = () => ({ type: 'GET_POSTS_BY_TAG_FAILED'});

export const GET_ADMIN_POSTS_REQUEST = (page: number | undefined) => ({ type: 'GET_ADMIN_POSTS_REQUEST', payload: page});
export const GET_ADMIN_POSTS_FAILED = () => ({ type: 'GET_POSTS_FAILED'});
