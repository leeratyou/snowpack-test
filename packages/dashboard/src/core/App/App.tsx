import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../GlobalStyles'
import ErrorBoundary from 'src/core/ErrorBoundary'
import Routes from 'src/core/Routes'

import theme from 'src/config/theme'

const App: FC = () => (
  <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Routes />
    </ThemeProvider>
  </ErrorBoundary>
)

export default App
