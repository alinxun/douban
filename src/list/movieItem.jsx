import React, { Component } from 'react'

class MovieListItem extends Component {
  render () {
    let el = this.props.value
    return (
      <li className='item' onClick={() => { this.props.showDetails(el) }}>
        <img className='item-img' src={el.images.small} />
        <div className='item-detail'>
          <p>名称：{el.title}</p>
          <p>
            {el.genres && el.genres.map((el2, index) => {
              return <span key={index} className='tag movie-tag'>{el2}</span>
            })}
          </p>
          <p>作者：{el.casts && el.casts.map((el2, index) => {
            return <span key={index} className='casts'>{el2.name}</span>
          })}</p>
          <p>评分：{el.rating.average}</p>
        </div>
      </li>
    )
  }
}

module.exports = MovieListItem
