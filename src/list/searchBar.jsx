import React, { Component } from 'react'
import './searchBar.css'

class Search extends Component {
  render () {
    return (
      <div className='search'>
        <i className='iconfont anticon icon-search1' />
        <input className='search-input' placeholder={this.props.hold}
          onChange={(e) => { this.props.inputChange(e) }} />
        <button className='search-btn' onClick={() => { this.props.searchClick(0) }}>搜索</button>
      </div>
    )
  }
}

export default Search
