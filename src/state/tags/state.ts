import { Pagination, TagType } from '../types';

export type TagsStoreState = {
    is_fetching: boolean,
    errors: any[],
    tags: TagType[],
};

const defaultState: TagsStoreState = {
    is_fetching: false,
    errors: [],
    tags: [],
};

export default defaultState;