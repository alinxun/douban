import React, { Component } from 'react'
import './header.css'

class Heard extends Component {
  render () {
    const details = this.props.details
    const type = this.props.type
    const title = type === 'book' ? '图书' : type === 'movic' ? '电影' : '音乐'
    return (
      <div className='detail-header'>
        <div
          className='detail-header-back'
          onClick={() => { this.props.showList() }}>
          <i className='icon anticon icon-left' />
          <span>{title}</span>
        </div>
        <p className='detail-header-title'>{details.title}</p>
      </div>
    )
  }
}
export default Heard
