import { Link } from 'react-router-dom'

import footerlogo from '../../assets/new/Asset20@4x.png'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='footer-content'>
          <img src={footerlogo} alt='footer' />

          <nav className='footer-nav'>
            <div className='footer-nav-column'>
              <h3>Links</h3>
              <ul className='footer-nav-list'>
                <li className='footer-nav-item'>
                  <Link to='/home'>Home</Link>
                </li>
                <li className='footer-nav-item'>
                  <Link to='/about'>About</Link>
                </li>
                <li className='footer-nav-item'>
                  <Link to='/menu'>Menu</Link>
                </li>
                <li className='footer-nav-item'>
                  <Link to='/booking'>Reservations</Link>
                </li>
                <li className='footer-nav-item'>
                  <Link to='/order-online'>Order Online</Link>
                </li>
                <li className='footer-nav-item'>
                  <Link to='/login'>Login</Link>
                </li>
              </ul>
            </div>

            <div className='footer-nav-column'>
              <h3>Contact</h3>
              <ul className='footer-nav-list'>
                <li className='footer-nav-item'>
                  <a href='tel:+91 123 123 1234'>+1 123 123 1234</a>
                </li>
                <li className='footer-nav-item'>
                  <a href='mailto:help@littlelemon.co'>
                    help@littlelemon.co
                  </a>
                </li>
              </ul>
            </div>

            <div className='footer-nav-column'>
              <h3>Social Media</h3>
              <ul className='footer-nav-list'>
                <li className='footer-nav-item'>
                  <a href='#!'>Facebook</a>
                </li>
                <li className='footer-nav-item'>
                  <a href='#!'>Instagram</a>
                </li>
                <li className='footer-nav-item'>
                  <a href='#!'>Twitter</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <p className='copyright'>
          Little Lemon &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer
