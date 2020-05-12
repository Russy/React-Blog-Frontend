import { PostType } from '../types';
export const GET_POST_REQUEST = (slug: string) => ({ type: 'GET_POST_REQUEST', payload: slug});
export const GET_POST_SUCCESS = (post: PostType) => ({ type: 'GET_POST_SUCCESS', payload: post});
export const GET_POST_FAILED = () => ({ type: 'GET_POST_FAILED'});

export const GET_EDIT_POST_REQUEST = (slug: string) => ({ type: 'GET_EDIT_POST_REQUEST', payload: slug});
export const GET_EDIT_POST_SUCCESS = (post: PostType) => ({ type: 'GET_EDIT_POST_SUCCESS', payload: post});
export const GET_EDIT_POST_FAILED = () => ({ type: 'GET_EDIT_POST_FAILED'});

export const POST_EDIT_POST_REQUEST = (post: PostType) => ({ type: 'POST_EDIT_POST_REQUEST', payload: post});
export const POST_EDIT_POST_SUCCESS = (post: PostType) => ({ type: 'POST_EDIT_POST_SUCCESS', payload: post});
export const POST_EDIT_POST_FAILED = () => ({ type: 'POST_EDIT_POST_FAILED'});

export const CLEAR_POST_REQUEST = () => ({ type: 'CLEAR_POST_REQUEST'});

export const GET_EMPTY_POST_REQUEST = () => ({ type: 'GET_EMPTY_POST_REQUEST'});

export const POST_DELETE_REQUEST = (page: number) => ({ type: 'POST_DELETE_REQUEST', payload: page});
export const POST_DELETE_SUCCESS = () => ({ type: 'POST_DELETE_SUCCESS'});