import { call, put, takeEvery } from 'redux-saga/effects'

function * fetchLabel () {
   try {
      const response = yield call(fetch, '/label')
      const {label} = yield call(response.json.bind(response))
      yield put({type: "FETCH_SUCCEEDED", label})
   } catch (e) {
      const {message} = e
      yield put({type: "FETCH_FAILED", message})
   }
}

export default function * () {
  yield takeEvery('FETCH', fetchLabel)
}
