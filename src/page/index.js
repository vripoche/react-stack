import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreator from './action'

import style from './index.css'

class Page extends Component {
  componentDidMount() {
    this.props.load('Loaded!')
  }
  componentDidUpdate() {
    if (this.props.errorMessage) alert(this.props.errorMessage)
  }
  onClick = () => {
    this.props.fetch()
  }
  render() {
    return (
      <div className={style.app} onClick={this.onClick}>
        <span className={style.label + ' js-label'}>{this.props.label}</span>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { ...state.page }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...actionCreator }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page)
