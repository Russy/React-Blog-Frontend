import { combineReducers, Reducer } from 'redux';
import { posts } from './posts/reducers';
import { post } from './post/reducers';

export const rootReducer: Reducer = combineReducers({
    posts,
    post
});