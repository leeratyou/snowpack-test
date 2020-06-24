import React, { Component } from 'react'

import { ThemeProvider } from 'styled-components'
import theme from 'src/config/theme'

const withTheme = (component: Component) => <ThemeProvider theme={theme}>{component}</ThemeProvider>
export default withTheme
