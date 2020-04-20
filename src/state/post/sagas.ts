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

export function* postSaga() {
    yield takeLatest('GET_POST_REQUEST', fetchPost);
    yield takeLatest('GET_EDIT_POST_REQUEST', fetchEditPost);
}