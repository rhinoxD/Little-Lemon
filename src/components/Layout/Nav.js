import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../Common/Button'

import './Layout.css'

export const Nav = () => {
  const [showNav, setShowNav] = useState(false)

  const ref = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowNav(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return (
    <nav ref={ref}>
      <Button
        variant='primary'
        classes='toggle-menu'
        handleClick={() => setShowNav((prev) => !prev)}
        aria-label='toggles navigation on click'
      >
        <img src='/assets/images/hamburger.svg' alt='hamburger menu' />
      </Button>

      <ul className={`nav-list flex ${showNav && 'active'}`}>
        <li>
          <Link to='/' onClick={() => setShowNav(false)} aria-label='On Click'>
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/about'
            onClick={() => setShowNav(false)}
            aria-label='On Click'
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to='/menu'
            onClick={() => setShowNav(false)}
            aria-label='On Click'
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            to='/booking'
            onClick={() => setShowNav(false)}
            aria-label='On Click'
          >
            Reservations
          </Link>
        </li>
        <li>
          <Link
            to='/order-online'
            onClick={() => setShowNav(false)}
            aria-label='On Click'
          >
            Order Online
          </Link>
        </li>
        <li>
          <Link
            to='/login'
            onClick={() => setShowNav(false)}
            aria-label='On Click'
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
