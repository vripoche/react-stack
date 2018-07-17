import React from "react";
import { mount } from 'enzyme';

import App from './app'

describe('App', () => {
	let wrapper
	beforeEach(() => {
		wrapper = mount(<App />)
	})
	it('should be loaded', () => {
		expect(wrapper.text())
			.toEqual('Hello React!')
	})
})
