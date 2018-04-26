import React, { Component } from 'react'

class BookListItem extends Component {
  render () {
    let el = this.props.value
    return (
      <li className='item' onClick={() => { this.props.showDetails(el) }}>
        <img className='item-img' src={el.image} />
        <div className='item-detail'>
          <p>名称：{el.title}</p>
          <p>{el.tags && el.tags.map((el2, index) => {
            return <span className='tag book-tag' key={index}>{el2.name}</span>
          })}</p>
          <p>作者：{el.author}</p>
          <p>评分：{el.rating.average}</p>
          <p>时间：{el.pubdate}</p>
        </div>
      </li>
    )
  }
}

export default BookListItem
