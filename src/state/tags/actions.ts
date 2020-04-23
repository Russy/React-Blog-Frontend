import { TagType } from '../types';

export const GET_TAGS_REQUEST = () => ({ type: 'GET_TAGS_REQUEST' });
export const GET_TAGS_SUCCESS = (tags: TagType[]) => ({ type: 'GET_TAGS_SUCCESS', payload: tags});

export const POST_TAGS_REQUEST = (tag: string) => ({ type: 'POST_TAGS_REQUEST', payload: tag });
export const POST_TAGS_SUCCESS = (tag: TagType) => ({ type: 'POST_TAGS_SUCCESS', payload: tag});

export const DELETE_TAG_REQUEST = (id: number) => ({ type: 'DELETE_TAG_REQUEST', payload: id });
export const DELETE_TAG_SUCCESS = (id: number) => ({ type: 'DELETE_TAG_SUCCESS', payload: id });
