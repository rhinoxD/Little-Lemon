import React from 'react'
import { Link } from 'react-router-dom'

import header from '../../assets/Logo.svg'

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <img src={header} alt='header-logo' />
      </Link>
    </header>
  )
}

export default Header
