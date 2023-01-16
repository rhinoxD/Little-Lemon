import { Routes, Route, BrowserRouter } from 'react-router-dom'

import './App.css'
import About from './components/About'
import BookingPage from './components/BookingPage'
import Home from './components/Home'
import Footer from './components/Layout/Footer'
import Nav from './components/Layout/Nav'
import Login from './components/Login'
import Menu from './components/Menu'
import OrderOnline from './components/OrderOnline'
import Reservations from './components/Reservations'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reservations' element={<Reservations />} />
        <Route path='/order-online' element={<OrderOnline />} />
        <Route path='/login' element={<Login />} />
        <Route path='/booking' element={<BookingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
