import React, { Component } from 'react'
import BookItem from './bookItem.jsx'
import MeScroll from 'mescroll.js'
import { fetchBook } from '../api/fetch.js'
import Search from './searchBar.jsx'

class BookList extends Component {
  constructor (opt) {
    super(opt)
    this.mescroll = null
    this.state = {
      data: [],
      page: 0,
      pageSize: 20,
      word: ''
    }
  }

  searchClick () {
    this.mescroll.scrollTo(0, 200)
    this.search(0)
  }

  inputChange (e) {
    this.setState({
      word: e.target.value
    })
  }

  componentDidMount () {
    this.mescroll = new MeScroll('mescroll', {
      down: {
        auto: true,
        callback: () => {
          this.downSearch()
        }
      },
      up: {
        auto: false,
        callback: () => {
          this.upSearch()
        }
      }
    })
  }

  downSearch () {
    this.search(0)
  }

  upSearch () {
    this.search(this.state.page + 1)
  }

  search (page) {
    async function getData () {
      const data = await fetchBook(this.state.word, page, this.state.pageSize)
      this.setState({
        data: page ? this.state.data.concat(data.books) : data.books,
        page: page
      })
      this.mescroll.endBySize(data.count * (page + 1), data.total)
    }
    getData.bind(this)()
  }

  render () {
    return (
      <div>
        <Search searchClick={this.searchClick.bind(this)} inputChange={this.inputChange.bind(this)} hold='书名、作者、ISBN' />
        <div className='content mescroll' id='mescroll'>
          <ul className='list'>
            {this.state.data.map((el, key) => {
              return <BookItem key={key} value={el} showDetails={this.props.showDetails} />
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default BookList
