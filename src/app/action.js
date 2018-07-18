export const LOAD = 'LOAD'
export const load = (label) => ({
	type: LOAD, label
})

export const FETCH = 'FETCH'
export const FETCH_SUCCEEDED = 'FETCH_SUCCEEDED'
export const FETCH_FAILED = 'FETCH_FAILED'
export const fetch = () => ({
	type: FETCH
})
