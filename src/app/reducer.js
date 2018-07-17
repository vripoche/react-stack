import { LOAD, FETCH_SUCCEEDED } from './action'

const initialState = {
	label: ''
}

export default function (state = initialState, action) {
	switch(action.type) {
		case LOAD:
		case FETCH_SUCCEEDED:
			const {label} = action
			return {...state, label}
		default:
			return state
	}
}
