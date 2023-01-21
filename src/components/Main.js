import greekSalad from '../assets/greek salad.jpg'
import bruschetta from '../assets/bruchetta.svg'
import lemonDessert from '../assets/lemon dessert.jpg'
import scooter from '../assets/scooter.svg'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <main>
      <section id='hero-banner' className='hero-banner'>
        <div className='container flex hero-container'>
          <div className='hero-content'>
            <h1 className='hero-title'>Little Lemon</h1>
            <h4 className='hero-subtitle'>Chicago</h4>
            <p className='hero-description'>
              We are family owned mediterranean restaurant, focussed on
              traditional recipes served with modern twist.
            </p>
            <button className='button'>
              <Link to='/booking' aria-label='On Click'>
                Reserve a Table
              </Link>
            </button>
          </div>
          <img
            src='assets/images/hero.jpg'
            alt='hero banner'
            className='hero-image'
          />
        </div>
      </section>

      <div className='specials'>
        <div className='heading'>
          <h1>This weeks specials!</h1>
          <button aria-label='On Click'>Online Menu</button>
        </div>
        <div className='cards'>
          <div className='one'>
            <div className='card-image'>
              <img src={greekSalad} alt='' />
            </div>
            <div className='card-heading'>
              <p>Greek Salad</p>
              <p>$ 12.99</p>
            </div>
            <div className='card-text'>
              <p>
                The famous greek salad of scrispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
            </div>
            <div className='card-btn'>
              <button aria-label='On Click'>
                Order a delivery
                <span>
                  <img src={scooter} alt='' />
                </span>
              </button>
            </div>
          </div>

          <div className='two'>
            <div className='card-image'>
              <img src={bruschetta} alt='' />
            </div>
            <div className='card-heading'>
              <p>Bruschetta</p>
              <p>$ 5.99</p>
            </div>
            <div className='card-text'>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
            </div>
            <div className='card-btn'>
              <button>
                Order a delivery
                <span>
                  <img src={scooter} alt='' />
                </span>
              </button>
            </div>
          </div>

          <div className='three'>
            <div className='card-image'>
              <img src={lemonDessert} alt='' />
            </div>
            <div className='card-heading'>
              <p>Lemon Dessert</p>
              <p>$ 5.00</p>
            </div>
            <div className='card-text'>
              <p>
                This comes straight from grandma's recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
            </div>
            <div className='card-btn'>
              <button>
                Order a delivery
                <span>
                  <img src={scooter} alt='' />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
