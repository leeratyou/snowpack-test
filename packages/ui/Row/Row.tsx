import React, { FC } from 'react'
import styled from 'styled-components'

interface Props {
  justify?: 'between' | 'start' | 'end' | 'around' | 'evenly'
}

const map = {
  between: 'space-between',
  start: 'flex-start',
  end: 'flex-end',
  around: 'space-around',
  evenly: 'space-evenly'
}

const StyledRow = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: ${p => map[p.justify || 'start']};
`

const Row: FC<Props> = props => <StyledRow {...props} />

export default Row
