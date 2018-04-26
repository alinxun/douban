import React, { Component } from 'react'

class MusicDetail extends Component {
  render () {
    const det = this.props.details
    let tracks = det.attrs.tracks || ['']
    tracks = tracks[0].split('\n')
    return (
      <div className='detail-content detail-music'>
        <div className='detail-music-info'>
          <img className='detail-music-img' src={det.image} />
          <p className='detail-music-info-text'>名称：{det.title}</p>
          <p className='detail-music-info-text'>
                        作者：
            {det.author && det.author.map((item, index) => {
              return <span key={item.name}>{item.name}</span>
            })}
          </p>
          <p className='detail-music-info-text'>
                        发布商：
            {det.attrs.publisher && det.attrs.publisher.map((item, index) => {
              return <span key={item}>{item}</span>
            })}
          </p>
          <p className='detail-music-info-text'>
                        发布时间：
            {det.attrs.pubdate && det.attrs.pubdate.map((item, index) => {
              return <span key={item}>{item}</span>
            })}
          </p>
          <p className='detail-music-info-text'>评分：{det.rating.average}</p>
          <p className='detail-music-info-text'>
            {det.tags && det.tags.map((item) => {
              return <span key={item.name} className='tag'>{item.name}</span>
            })}
          </p>
        </div>

        <h2 className='detail-content-title'>简介</h2>
        <p className='detail-music-text'>{det.summary}</p>
        <h2 className='detail-content-title'>内容</h2>
        <ul className='detail-music-tracks'>
          {tracks && tracks.map((item) => {
            return <li key={item}>{item}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default MusicDetail
