import { PostType } from '../types';

export const GET_POSTS_REQUEST = (page: number | undefined) => ({ type: 'GET_POSTS_REQUEST', payload: page});
export const GET_POSTS_SUCCESS = (posts: any) => ({ type: 'GET_POSTS_SUCCESS', payload: posts});
export const GET_POSTS_FAILED = () => ({ type: 'GET_POSTS_FAILED'});