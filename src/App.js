import React, { useState, useEffect } from 'react'
import { CardList } from './components/card-list/card-list.component'
import { Search } from './components/search/search.component'

import './App.css'

const App = () => {

  const [state, setState] = useState({
    cards: [],
    searchTerm: '',
    title: ''
  })

  const searchHandler = ({ target }) => {
    setState({ ...state, searchTerm: target.value.toLowerCase() })
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await response.json()

      setState(state => ({ ...state, cards: [...users] }))
    }

    fetchUsers()
  }, [])

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
