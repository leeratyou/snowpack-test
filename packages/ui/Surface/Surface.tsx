import React, { FC } from 'react'
import styled from 'styled-components'

const StyledSurface = styled.div`
  background: white;
  border-radius: 4px;
  box-shadow:
  0 4px 4px -6px rgba(0, 0, 0, 0.3),
  0 6px 12px -6px rgba(0, 0, 0, 0.4),
  0 4px 12px 2px rgba(0, 0, 0, 0.1);
`

const Space: FC = ({ ...props }) => <StyledSurface {...props} />

export default Space
