import React, { useReducer } from 'react'
import BookingForm from './BookingForm'

const BookingPage = ({ availableTimes, setAvailableTimes }) => {
  const updateTimes = (state, action) => {
    console.log(state)
    console.log(action)
    state = availableTimes.filter(function (item) {
      return item !== action.type
    })
    return state
  }
  const [state, dispatch] = useReducer(updateTimes, availableTimes)
  return (
    <div>
      <BookingForm availableTimes={state} dispatch={dispatch} />
    </div>
  )
}

export default BookingPage
