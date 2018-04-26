import React, { Component } from 'react'
import './iconfont/iconfont.css'
import './style.css'
import List from './list/index.jsx'
import BottomNav from './list/bottomNav.jsx'
import Detail from './details/index.jsx'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      type: 'book', // book movie music

      isList: true, // true  list   false details
      details: ''
    }
  }

  bottomNavClick (type) {
    this.setState({
      type: type
    })
  }

  showDetails (data) {
    this.setState({
      details: data,
      isList: false
    })
  }

  showList () {
    this.setState({
      isList: true
    })
  }

  render () {
    const type = this.state.type
    return (
      <div className='app'>
        <div className={'index' + ' ' + this.state.isList}>
          <List type={type} showDetails={this.showDetails.bind(this)} />
          <BottomNav bottomNavClick={this.bottomNavClick.bind(this)} type={this.state.type} />
        </div>
        {!this.state.isList && <Detail details={this.state.details} type={this.state.type} showList={this.showList.bind(this)} />}
      </div>
    )
  }
}

module.exports = App
