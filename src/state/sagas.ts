import { fork, takeLatest } from 'redux-saga/effects';
import { postsSaga } from './posts/sagas';
import { postSaga } from './post/sagas';

function* rootSaga() {
    yield fork(postsSaga);
    yield fork(postSaga);
}

export default rootSaga;