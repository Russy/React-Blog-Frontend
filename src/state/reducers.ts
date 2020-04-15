import { combineReducers, Reducer } from 'redux';
import { posts } from './posts/reducers';

export const rootReducer: Reducer = combineReducers({
    posts
});