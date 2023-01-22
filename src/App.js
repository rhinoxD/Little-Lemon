import { useReducer } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import './App.css'
import About from './components/About'
import BookingPage from './components/BookingPage'
import ConfirmedBooking from './components/ConfirmedBooking'
import Home from './components/Home'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'
import Login from './components/Login'
import Menu from './components/Menu'
import OrderOnline from './components/OrderOnline'
import Reservations from './components/Reservations'
import { fetchAPI, submitAPI } from './API'

export const initializeTimes = () => {
  const data = fetchAPI(new Date())

  return data.map((item) => ({ value: item, label: item }))
}

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'DATE_CHANGE':
      const data = fetchAPI(new Date(action.payload))
      return data.map((item) => ({ value: item, label: item }))

    case 'ADD_BOOKING':
      return state.filter((time) => time.value !== action.payload)

    default:
      return state
  }
}

function App() {
  const navigate = useNavigate()

  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes()
  )

  const submitForm = (formData) => {
    setAvailableTimes({
      type: 'ADD_BOOKING',
      payload: formData.time,
    })

    const response = submitAPI(formData)
    if (response) navigate('/booking-confirm')
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reservations' element={<Reservations />} />
        <Route path='/order-online' element={<OrderOnline />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/booking'
          element={
            <BookingPage
              availableTimes={availableTimes}
              setAvailableTimes={setAvailableTimes}
              submitForm={submitForm}
            />
          }
        />
        <Route path='/booking-confirm' element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
