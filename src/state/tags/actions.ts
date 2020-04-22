import { PostType, TagType } from '../types';

export const GET_TAGS_REQUEST = () => ({ type: 'GET_TAGS_REQUEST' });
export const GET_TAGS_SUCCESS = (tags: TagType[]) => ({ type: 'GET_TAGS_SUCCESS', payload: tags});
export const GET_TAGS_FAILED = () => ({ type: 'GET_TAGS_FAILED'});

export const POST_TAGS_REQUEST = (tag: string) => ({ type: 'POST_TAGS_REQUEST', payload: tag });
export const POST_TAGS_SUCCESS = (tag: TagType) => ({ type: 'POST_TAGS_SUCCESS', payload: tag});
export const POST_TAGS_FAILED = () => ({ type: 'POST_TAGS_FAILED'});
