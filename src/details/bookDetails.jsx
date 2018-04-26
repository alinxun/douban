import React, { Component } from 'react'

class BookDetail extends Component {
  render () {
    const det = this.props.details
    return (
      <div className='detail-content detail-book'>
        <div className='detail-book-info'>
          <img className='detail-book-img' src={det.images.large} />
          <p className='detail-book-info-text'>名称：{det.title}</p>
          <p className='detail-book-info-text'>作者：{det.author}</p>
          <p className='detail-book-info-text'>出版社：{det.publisher}</p>
          <p className='detail-book-info-text'>日期：{det.pubdate}</p>
          <p className='detail-book-info-text'>评分：{det.rating.average}</p>
          <p className='detail-book-info-text'>价钱：￥{det.price}</p>
          <p className='detail-book-info-text'>{det.tags && det.tags.map((item, index) => {
            return <span key={item.name} className='tag'>{item.name} </span>
          })}</p>
        </div>
        <h2 className='detail-content-title'>序言</h2>
        <p className='detail-book-text'>{det.catalog}</p>
        <h2 className='detail-content-title'>简介</h2>
        <p className='detail-book-text'>{det.summary}</p>
      </div>
    )
  }
}

export default BookDetail
