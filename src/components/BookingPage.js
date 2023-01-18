import React, { useEffect, useReducer } from 'react'
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
  // const initializeTimes = async () => {
  //   const fetchAPI = await fetch(
  //     'https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js'
  //   )
  //   // const data = await fetchAPI(new Date())
  //   console.log(fetchAPI)
  // }
  // initializeTimes()
  // useEffect(() => {
  //   initializeTimes()
  // }, [initializeTimes])
  const [state, dispatch] = useReducer(updateTimes, availableTimes)
  return (
    <div>
      <BookingForm availableTimes={state} dispatch={dispatch} />
    </div>
  )
}

export default BookingPage
