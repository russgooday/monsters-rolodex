import React, { useEffect, useState } from 'react'
import './App.css'

function App () {
  const [state, setState] = useState({ monsters: [] })

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await response.json()

      setState({ monsters: [...users] })
    }

    fetchUsers()
  }, [])

  const mapMonsters = ({ name, id }) => (<h1 key={id}> {name}</h1>)

  return (
    <div className='App'>
      {state.monsters.map(mapMonsters)}
    </div>
  )
}

export default App
