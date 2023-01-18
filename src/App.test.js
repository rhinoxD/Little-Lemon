import { render, screen } from '@testing-library/react'
import BookingForm from './components/BookingForm'
import BookingPage from './components/BookingPage'

const initialTimings = [
  'Select a time...',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
]

test('Renders the BookingForm heading', () => {
  render(<BookingForm />)
  const headingElement = screen.getByText('Booking Form')
  expect(headingElement).toBeInTheDocument()
})

test('should return the initial state', () => {
  render(<BookingPage />)
  const availableTimes = initialTimings
  expect(availableTimes).toEqual(initialTimings)
})

// test('returns the same value that is provided in the state', () => {
//   render(<BookingPage />)
//   const state = BookingPage()
//   expect(state).toEqual(initialTimings)
// })
