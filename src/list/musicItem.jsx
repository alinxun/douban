import React, { Component } from 'react'

class MusicListItem extends Component {
  render () {
    let el = this.props.value
    return (
      <li className='item' onClick={() => { this.props.showDetails(el) }}>
        <img className='item-img' src={el.image} />
        <div className='item-detail'>
          <p>名称：{el.title}</p>
          <p>{el.tags && el.tags.map((el2, index) => {
            return <span key={index} className='tag music-tag'>{el2.name}</span>
          })}</p>
          <p>作者：{el.author && el.author.map((el3, index) => {
            return <span key={index} className='author'>{el3.name}</span>
          })}</p>
          <p>评分：{el.rating.average}</p>

        </div>
      </li>
    )
  }
}

module.exports = MusicListItem
