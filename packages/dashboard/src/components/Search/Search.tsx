import React, { FC, useState } from 'react'
import styled from 'styled-components'

import { Surface } from 'src/ui/index'
import { Input, InputAdornment, IconButton } from '@material-ui/core'
import { Search as SearchIcon, Clear } from '@material-ui/icons'

const SearchInput = styled(Input)`
  transition: all 300ms ease-in-out;
  min-width: 100px;
  padding: 0.2rem 0.5rem;
  font-size: 16px !important;
  &:active,
  &:focus,
  &.Mui-focused {
    min-width: 500px;
  }
  &:before, &:after {
    display: none;
  }
`

const Search: FC = () => {
  const [input, setInput] = useState('')
  const handleClear = () => setInput('')
  
  return (
    <Surface>
      <SearchInput
        placeholder='Search...'
        value={input}
        onChange={e => setInput(e.target.value)}
        startAdornment={<InputAdornment position='start'><SearchIcon /></InputAdornment>}
        endAdornment={input ? <InputAdornment position='end'><IconButton onClick={handleClear}><Clear /></IconButton></InputAdornment> : null}
      />
    </Surface>
  )
}

export default Search
