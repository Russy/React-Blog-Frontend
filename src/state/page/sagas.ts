import { call, put, takeLatest } from 'redux-saga/effects';
import { Api } from '../../libs/api';
import * as actions from './actions';

function* fetchPage(action) {
    const post = yield call(Api.getPage, action.payload);
    yield put(actions.GET_PAGE_SUCCESS(post));
}

function* fetchEditPage(action) {
    const post = yield call(Api.admin.getPage, action.payload);
    yield put(actions.GET_PAGE_SUCCESS(post));
}

function* postEditPage(action) {
    const post = yield call(Api.admin.updatePage, action.payload);
    yield put(actions.PAGE_EDIT_PAGE_SUCCESS(post));
    document.location.href = '/admin/pages';
}

export function* pageSaga() {
    yield takeLatest('GET_PAGE_REQUEST', fetchPage);
    yield takeLatest('GET_EDIT_PAGE_REQUEST', fetchEditPage);
    yield takeLatest('PAGE_EDIT_PAGE_REQUEST', postEditPage);
}