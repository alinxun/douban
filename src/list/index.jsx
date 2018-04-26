import React, { Component } from 'react'
import MoviceList from './movieList.jsx'
import BookList from './bookList.jsx'
import MusicList from './musicList.jsx'

import './mescroll.css'
import './index.css'

class List extends Component {
  render () {
    switch (this.props.type) {
      case 'movie':
        return <MoviceList showDetails={this.props.showDetails} />
      case 'book':
        return <BookList showDetails={this.props.showDetails} />

      case 'music':
        return <MusicList showDetails={this.props.showDetails} />
    }
  }
}

module.exports = List
