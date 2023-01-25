import { all } from 'redux-saga/effects'
import CounterSaga from './CounterRedux/CounterSaga'

export function* rootSaga() {
    yield all([
        CounterSaga()
    ])
}