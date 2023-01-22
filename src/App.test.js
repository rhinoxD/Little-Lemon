import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import App, { initializeTimes, updateTimes } from './App'

describe('App', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )

  test('renders App', () => {
    const title = screen.getAllByText(/Little Lemon/i)
    expect(title).toHaveLength(4)
  })

  test('initializeTimes returns values', () => {
    const times = initializeTimes()
    expect(times).toBeTruthy()
  })

  test('updateTimes returns values', () => {
    const newTimes = updateTimes('test value', 'action')
    expect(newTimes).toEqual('test value')
  })
})
