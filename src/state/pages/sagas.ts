import { call, put, takeLatest } from 'redux-saga/effects';
import { Api } from '../../libs/api';
import * as actions from './actions';

function* fetchPages(action) {
    try {
        const pages = yield call(Api.getPosts, action.payload);
        yield put(actions.GET_PAGES_SUCCESS(pages));
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* fetchAdminPages(action) {
    try {
        const pages = yield call(Api.admin.getPages, action.payload);
        yield put(actions.GET_PAGES_SUCCESS(pages));
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

export function* pagesSaga() {
    yield takeLatest('GET_ADMIN_PAGES_REQUEST', fetchAdminPages);
    yield takeLatest('GET_PAGES_REQUEST', fetchPages);
}