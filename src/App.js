import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'
import { Search } from './components/search/search.component'

import './App.css'

class App extends Component {
  state = {
    cards: [],
    searchTerm: ''
  };

  searchHandler = this.searchHandler.bind(this)

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ cards: [...users] }))
  }

  searchHandler ({ target }) {
    this.setState({ searchTerm: target.value.toLowerCase() })
  }

  render () {
    const { cards, searchTerm } = this.state

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <Search
          placeholder='search monsters'
          searchHandler={this.searchHandler}
        />
        <CardList cards={cards} searchTerm={searchTerm} />
      </div>
    )
  }
}

export default App
