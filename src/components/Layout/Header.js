import { Link } from 'react-router-dom'

import Nav from './Nav'

import './Layout.css'

const Header = () => (
  <header>
    <div className='container'>
      <div className='header-content flex'>
        <Link to='/'>
          <img src='assets/images/Logo.svg' alt='logo' />
        </Link>

        <Nav />
      </div>
    </div>
  </header>
)

export default Header
