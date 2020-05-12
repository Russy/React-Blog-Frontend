import { call, put, takeLatest } from 'redux-saga/effects';
import { Api } from '../../libs/api';
import * as actions from './actions';

function* fetchPost(action) {
    const post = yield call(Api.getPost, action.payload);
    yield put(actions.GET_POST_SUCCESS(post));
}

function* fetchEditPost(action) {
    const post = yield call(Api.admin.getPost, action.payload);
    yield put(actions.GET_POST_SUCCESS(post));
}

function* postEditPost(action) {
    const post = yield call(Api.admin.updatePost, action.payload);
    yield put(actions.POST_EDIT_POST_SUCCESS(post));
    document.location.href = '/admin';
}

function* deletePost(action) {
    yield call(Api.admin.deletePost, action.payload);
    yield put(actions.POST_DELETE_SUCCESS());
    document.location.href = '/admin';
}

export function* postSaga() {
    yield takeLatest('GET_POST_REQUEST', fetchPost);
    yield takeLatest('GET_EDIT_POST_REQUEST', fetchEditPost);
    yield takeLatest('POST_EDIT_POST_REQUEST', postEditPost);
    yield takeLatest('POST_DELETE_REQUEST', deletePost);
}