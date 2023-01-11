import { Routes, Route, BrowserRouter } from 'react-router-dom'

import './App.css'
import About from './components/About'
import Home from './components/Home'
import Footer from './components/Layout/Footer'
import Header from './components/Layout/Header'
import Nav from './components/Layout/Nav'
import Login from './components/Login'
import Menu from './components/Menu'
import OrderOnline from './components/OrderOnline'
import Reservations from './components/Reservations'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/reservations' element={<Reservations />} />
        <Route path='/order-online' element={<OrderOnline />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
