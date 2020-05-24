import { Option } from './state';

export const GET_OPTIONS_REQUEST = () => ({ type: 'GET_OPTIONS_REQUEST'});
export const GET_OPTIONS_SUCCESS = (options: Option[]) => ({ type: 'GET_OPTIONS_SUCCESS', payload: options});

export const POST_OPTIONS_REQUEST = (options: Option[]) => ({ type: 'POST_OPTIONS_REQUEST', payload: options});
export const POST_OPTIONS_SUCCESS = () => ({ type: 'POST_OPTIONS_SUCCESS'});
export const POST_OPTIONS_FAILED = (errors: string[]) => ({ type: 'POST_OPTIONS_FAILED', payload: errors});
