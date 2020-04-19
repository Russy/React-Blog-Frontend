import { call, put, takeLatest } from 'redux-saga/effects';
import { Api } from '../../libs/api';
import { Storage } from '../../libs/storage';
import * as actions from './actions';

function* login(action) {
    try {
        const response = yield call(Api.login, action.payload);
        yield put(actions.GET_LOGIN_SUCCESS());
        Storage.set('token',  "Bearer " + response.success.token);
        document.location.href = '/admin';
    } catch(e) {
        yield put(actions.GET_LOGIN_FAILED(e.message));
    }

}

export function* loginSaga() {
    yield takeLatest('GET_LOGIN_REQUEST', login);
}