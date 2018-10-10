import 'regenerator-runtime/runtime'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { fork } from 'redux-saga/effects'

import page from './page/reducer'
import pageSaga from './page/saga'

const sagaMiddleware = createSagaMiddleware()

function* rootSaga() {
  yield [fork(pageSaga)]
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  combineReducers({ page }),
  composeEnhancers(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(rootSaga)

export default store
