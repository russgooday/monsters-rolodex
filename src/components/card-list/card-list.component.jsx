// import modules
import React from 'react'
import { Card } from '../card/card-component'

// css
import './card-list.styles.css'

// filter and map callbacks
const eachCard = card => (
  <Card key={card.id} data={card} />
)

const nameIncludes = (searchTerm) =>
  ({ name }) => name.toLowerCase().includes(searchTerm)

// CardList Module
export const CardList = ({ cards, searchTerm }) => (
  <div className='card-list'>
    {
      cards
        .filter(nameIncludes(searchTerm))
        .map(eachCard)
    }
  </div>
)
