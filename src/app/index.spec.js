import React from "react";
import { Provider } from 'react-redux'
import { mount } from 'enzyme';

import store from '../store'
import App from './index'

function mountWithStore (Component) {
	return mount(<Provider store={store}><Component /></Provider>)
}

function mockFetch (list) {
	let mock = jest.fn()

	list.forEach((item) => {
		if (item.response) {
			mock = mock.mockImplementation(() => ({json: () => (item.response)}))
		}
		if (item.error) {
			mock = mock.mockImplementation(() => {
				throw item.error
			})
		}
	})

	window.fetch = mock
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

	it('should fetch on click', () => {
		mockFetch([{response: {label: 'Mocked!'}}])

		wrapper.simulate('click')

		expect(wrapper.text())
			.toEqual('Mocked!')
	})

  it('should alert if error (twice)', () => {
    jest.spyOn(window, 'alert').mockImplementation(jest.fn)

		mockFetch([{error: new Error('Error!')}])

		wrapper.simulate('click')
		wrapper.simulate('click')

    expect(window.alert.mock.calls[0][0])
      .toEqual('Error!')

    expect(window.alert.mock.calls[1][0])
      .toEqual('Error!')
  })
})
