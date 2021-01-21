import React, { useState, useEffect } from 'react'
import { CardList } from './components/card-list/card-list.component'
import { Search } from './components/search/search.component'

import './App.css'

const App = () => {

  const [state, setState] = useState({
    cards: [],
    searchTerm: ''
  })

  const searchHandler = ({ target }) => {
    setState({ ...state, searchTerm: target.value.toLowerCase() })
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setState({ ...state, cards: [...users] }))
  })

  const {searchTerm, cards} = state

  return (
    <div className='App'>
      <h1>Monsters Rolodex</h1>
      <Search
        placeholder='search monsters'
        searchHandler={searchHandler}
      />
      <CardList cards={cards} searchTerm={searchTerm} />
    </div>
  )
}

export default App
