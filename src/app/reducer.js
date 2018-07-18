import { LOAD, FETCH, FETCH_SUCCEEDED, FETCH_FAILED } from './action'

const initialState = {
	label: '',
	errorMessage: undefined
}

export default function (state = initialState, action) {
	switch(action.type) {
		case LOAD:
		case FETCH_SUCCEEDED:
			const {label = ''} = action
			return {...state, ...initialState, label}
		case FETCH_FAILED:
			const {message} = action
			return {...state, errorMessage: message}
		default:
			return {...state, errorMessage: undefined}
	}
}
