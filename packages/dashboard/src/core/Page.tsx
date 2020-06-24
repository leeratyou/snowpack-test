import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components'

const fadeInLeft = keyframes`
  0% {
    opacity: 0.01;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const StyledPage = styled.div`
  padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  transition: all 200ms ease-in-out;
  animation: ${fadeInLeft} 300ms ease-in-out 1;
`

const Page: FC = props => <StyledPage {...props} />

export default Page
