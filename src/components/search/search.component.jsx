import React from 'react'
import { debounce } from 'lodash'

import './search.styles.css'

export const Search = ({ searchHandler, placeholder }) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={debounce(searchHandler, 300)}
  />
)
