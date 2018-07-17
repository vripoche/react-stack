import { LOAD } from './action'

const initialState = {
	label: ''
}

export default function (state = initialState, action) {
	switch(action.type) {
		case LOAD:
			const {label} = action
			return {...state, label}
		default:
			return state
	}
}
