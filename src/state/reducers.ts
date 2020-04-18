import { combineReducers, Reducer } from 'redux';
import { posts } from './posts/reducers';
import { post } from './post/reducers';
import { login } from './login/reducers';

export const rootReducer: Reducer = combineReducers({
    posts,
    post,
    login
});