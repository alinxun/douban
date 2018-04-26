import React, { Component } from 'react'
import './bottomNav.css'

class BottomNav extends Component {
  render () {
    const type = this.props.type
    return (
      <div className='nav'>
        <div
          className={'nav-item ' + (type === 'book' ? 'nav-item-selected' : '')}
          onClick={() => { this.props.bottomNavClick('book') }}>
          <i className='icon anticon icon-book' />
          <span className='nav-item-text'>图书</span>
        </div>
        <div
          className={'nav-item ' + (type === 'movie' ? 'nav-item-selected' : '')}
          onClick={() => { this.props.bottomNavClick('movie') }}>
          <i className='icon anticon icon-videocamera' />
          <span className='nav-item-text'>电影</span>
        </div>
        <div
          className={'nav-item ' + (type === 'music' ? 'nav-item-selected' : '')}
          onClick={() => { this.props.bottomNavClick('music') }}>
          <i className='icon anticon icon-customerservice' />
          <span className='nav-item-text'>音乐</span>
        </div>
      </div>
    )
  }
}

export default BottomNav
