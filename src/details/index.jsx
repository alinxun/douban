import React, { Component } from 'react'
import Header from './header.jsx'
import BookDetails from './bookDetails.jsx'
import MovieDetails from './movieDetails.jsx'
import MusicDetails from './musicDetails.jsx'
import './index.css'

class Detail extends Component {
  render () {
    let Content = null
    switch (this.props.type) {
      case 'book':
        Content = BookDetails
        break
      case 'movie':
        Content = MovieDetails
        break
      case 'music':
        Content = MusicDetails
    }
    return (
      <div>
        <Header details={this.props.details} type={this.props.type} showList={this.props.showList} />
        <Content details={this.props.details} type={this.props.type} />
      </div>
    )
  }
}

export default Detail
