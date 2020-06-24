import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

import AppBar from 'src/core/AppBar/AppBar'
import SideBar from 'src/core/SideBar'

const LayoutContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${p => p.theme.color.back};
  display: flex;
  box-sizing: border-box;
  padding: ${p => p.theme.space(0.5)};
`

const Main = styled.div`
  flex: 1;
  margin-left: ${p => p.theme.space()};
`

const Layout: FunctionComponent = ({ children }) => (
  <LayoutContainer>
    <SideBar />
    <Main>
      <AppBar />
      {children}
    </Main>
  </LayoutContainer>
)

export default Layout
