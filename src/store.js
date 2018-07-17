import 'regenerator-runtime/runtime'
import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { fork } from 'redux-saga/effects'

import app from './app/reducer'
import appSaga from './app/saga'

const sagaMiddleware = createSagaMiddleware()

function * rootSaga () {
	yield [
		fork(appSaga)
	]
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(combineReducers({app}), composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default store
