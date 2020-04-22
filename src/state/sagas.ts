import { fork } from 'redux-saga/effects';
import { postsSaga } from './posts/sagas';
import { postSaga } from './post/sagas';
import { loginSaga } from './login/sagas';
import { tagsSaga } from './tags/sagas';

function* rootSaga() {
    yield fork(postsSaga);
    yield fork(postSaga);
    yield fork(loginSaga);
    yield fork(loginSaga);
    yield fork(tagsSaga);
}

export default rootSaga;