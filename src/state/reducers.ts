import { combineReducers } from 'redux';
import { posts } from './posts/reducers';

export const rootReducer: any = combineReducers({
    posts
});