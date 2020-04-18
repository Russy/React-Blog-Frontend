import { PostType } from '../types';

export type LoginStoreState = {
    is_fetching: boolean,
    errors: string[],
};

const defaultState: LoginStoreState = {
    is_fetching: false,
    errors: [],
};

export default defaultState;