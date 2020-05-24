import { combineReducers, Reducer } from 'redux';
import { posts } from './posts/reducers';
import { pages } from './pages/reducers';
import { post } from './post/reducers';
import { login } from './login/reducers';
import { tags } from './tags/reducers';
import { page } from './page/reducers';
import { settings } from './settings/reducers';

export const rootReducer: Reducer = combineReducers({
    posts,
    post,
    login,
    tags,
    pages,
    page,
    settings
});