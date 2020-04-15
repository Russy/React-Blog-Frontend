import { PostType } from '../types';

export const GET_POSTS_REQUEST = () => ({ type: 'GET_POSTS_REQUEST'});
export const GET_POSTS_SUCCESS = (posts: PostType[]) => ({ type: 'GET_POSTS_SUCCESS', payload: posts});
export const GET_POSTS_FAILED = () => ({ type: 'GET_POSTS_FAILED'});