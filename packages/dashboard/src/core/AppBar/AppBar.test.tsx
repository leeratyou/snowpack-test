import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

import withTheme from 'src/config/withTheme'
import AppBar from './AppBar'

describe('AppBar', () => {
  
  test('renders AppBar and find by testId', () => {
    const testId = 'AppBar'
    render(withTheme(<AppBar data-testid={testId} />))
    const component = screen.getByTestId(testId) // Find a logo element
    expect(component).toBeInTheDocument()
  })
  
  test('find opened menu after click', () => {
    render(withTheme(<AppBar />))
    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => fireEvent.click(button))
    const menu = screen.getByRole('menu')
    expect(menu).toBeInTheDocument()
  })
  
})


