import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import { combinedReducer } from "./RootReducer";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

export const store = configureStore({
    reducer: combinedReducer,
    middleware: middlewares
})
// export const store = createStore(
//     combinedReducer,
//     applyMiddleware(...middlewares)
// )

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch