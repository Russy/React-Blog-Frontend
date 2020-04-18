import { fork, takeLatest } from 'redux-saga/effects';
import { postsSaga } from './posts/sagas';
import { postSaga } from './post/sagas';
import { loginSaga } from './login/sagas';

function* rootSaga() {
    yield fork(postsSaga);
    yield fork(postSaga);
    yield fork(loginSaga);
}

export default rootSaga;