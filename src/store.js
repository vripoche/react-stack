import 'regenerator-runtime/runtime'
import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { fork } from 'redux-saga/effects'

import reducer from './reducer'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware()

function * rootSaga () {
	yield [
		fork(saga)
	]
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(combineReducers({app: reducer}), composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default store
