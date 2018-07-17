import React from "react";
import { Provider } from 'react-redux'
import { mount } from 'enzyme';

import store from './store'
import App from './app'

function mountWithStore (Component) {
	return mount(<Provider store={store}><Component /></Provider>)
}

describe('App', () => {
	let wrapper

	beforeEach(() => {
		wrapper = mountWithStore(App)
	})

	it('should be loaded', () => {
		expect(wrapper.text())
			.toEqual('Loaded!')
	})
})
