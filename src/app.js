import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreator from './action'

class App extends Component {
	componentDidMount() {
		this.props.load('Loaded!')
	}
	render() {
  	return <div>{this.props.label}</div>
	}
}

function mapStateToProps (state) {
	return {
		label: state.app.label
	}
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({...actionCreator}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
