import { all, put, takeLatest } from "redux-saga/effects";
import { DECREMENT_COUNTER, DECREMENT_COUNTER_REDUCER, INCREMENT_COUNTER, INCREMENT_COUNTER_REDUCER } from "./types";


function* handleIncrementCounter(): Generator<any, any, any> {
    try {
        yield put({
            type: INCREMENT_COUNTER_REDUCER
        })
    } catch (error) {
        console.log('inside handleIncrement Counter Error ==>', error)
    }
}

function* handleDecrementCounter(): Generator<any, any, any> {
    try {
        yield put({
            type: DECREMENT_COUNTER_REDUCER
        })
    } catch (error) {
        console.log('inside handleDecrementCounter Error ==>', error)
    }
}


export default function* CounterSaga() {
    yield all([
        takeLatest(INCREMENT_COUNTER, handleIncrementCounter),
        takeLatest(DECREMENT_COUNTER, handleDecrementCounter)
    ])
}