import { call, put, takeLatest } from 'redux-saga/effects';
import { Api } from '../../libs/api';
import * as actions from './actions';

function* fetchPosts(action) {
    try {
        const posts = yield call(Api.getPosts, action.payload);
        yield put(actions.GET_POSTS_SUCCESS(posts));
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* search(action) {
    try {
        const posts = yield call(Api.searchPosts, action.payload);
        yield put(actions.GET_POSTS_SUCCESS(posts));
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* fetchPostsByTags(action) {
    try {
        const posts = yield call(Api.getPostsByTags, action.payload);
        yield put(actions.GET_POSTS_SUCCESS(posts));
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}


function* fetchAdminPosts(action) {
    try {
        const posts = yield call(Api.admin.getPosts, action.payload);
        yield put(actions.GET_POSTS_SUCCESS(posts));
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

export function* postsSaga() {
    yield takeLatest('GET_ADMIN_POSTS_REQUEST', fetchAdminPosts);
    yield takeLatest('GET_POSTS_REQUEST', fetchPosts);
    yield takeLatest('SEARCH_POSTS_REQUEST', search);
    yield takeLatest('GET_POSTS_BY_TAG_REQUEST', fetchPostsByTags);
}