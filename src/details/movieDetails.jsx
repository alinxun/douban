import React, { Component } from 'react'

class MovieDetail extends Component {
  render () {
    const det = this.props.details
    return (
      <div className='detail-content detail-movie'>
        <img className='detail-movie-img' src={det.images.large} />
        <div className='detail-movie-info'>
          <h2 className='detail-content-title'>简介</h2>
          <p className='detail-movie-info-text'>
                        名称：{det.title}
            {det.genres && det.genres.map((item, index) => {
              return <span key={item} className='tag'>{item}</span>
            })}
          </p>
          <p className='detail-movie-info-text'>上映时间：{det.year}</p>
          <p className='detail-movie-info-text'>导演：{det.directors[0] && det.directors[0].name}</p>
          <p className='detail-movie-info-text'>
            {det.title}({det.original_title || ''})
          </p>
        </div>
        <h2 className='detail-content-title'>演员</h2>
        <div className='detail-movie-casts'>
          {det.casts && det.casts.map((item, index) => {
            return (
              <div key={index} className='cast'>
                <img className='cast-avatar' src={item.avatars && (item.avatars.large || item.avatars.medium || item.avatars.small)} />
                <span className='cast-name'>{item.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default MovieDetail
