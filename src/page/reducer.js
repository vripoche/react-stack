import { LOAD, FETCH_SUCCEEDED, FETCH_FAILED } from './action'

const initialState = {
  label: '',
  errorMessage: undefined,
}

export default function(state = initialState, action) {
  let label, message

  switch (action.type) {
  case LOAD:
  case FETCH_SUCCEEDED:
    ({ label = '' } = action)
    return { ...state, ...initialState, label }
  case FETCH_FAILED:
    ({ message } = action)
    return { ...state, errorMessage: message }
  default:
    return { ...state, errorMessage: undefined }
  }
}
