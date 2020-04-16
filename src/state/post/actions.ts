import { PostType } from '../types';
export const GET_POST_REQUEST = (slug: string) => ({ type: 'GET_POST_REQUEST', payload: slug});
export const GET_POST_SUCCESS = (post: PostType) => ({ type: 'GET_POST_SUCCESS', payload: post});
export const GET_POST_FAILED = () => ({ type: 'GET_POST_FAILED'});