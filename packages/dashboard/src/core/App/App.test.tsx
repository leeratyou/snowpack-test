import * as React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders App and find text logo', () => {
  const { getByText } = render(<App />)
  const logoElement = getByText(/fintech/i) // Find a logo element
  expect(logoElement).toBeInTheDocument()
})
