import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { Provider } from 'react-redux'

import store from './store'
import Page from './page'

class App extends Component {
    render = () => (<Router>
      <div>
        <Link to="/page">Page</Link>
        <hr />
        <Route path='/page' render={() => (<Page />)} />
      </div>
    </Router>)
}

render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
