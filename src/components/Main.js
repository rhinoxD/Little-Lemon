import greekSalad from '../assets/greek salad.jpg'
import bruschetta from '../assets/bruchetta.svg'
import lemonDessert from '../assets/lemon dessert.jpg'
import scooter from '../assets/scooter.svg'
import { Link } from 'react-router-dom'
import { Button } from '../components/Common/Button'

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

      <section id='specials-section' className='container specials'>
        <h2 className='specials-heading flex'>
          <span>This week's specials!</span>
          <Button variant='primary' handleClick={() => {}}>
            Online Menu
          </Button>
        </h2>

        <div className='grid specials-grid'>
          <div className='specials-card'>
            <img src={greekSalad} alt='Greek Salad' />
            <div className='specials-content'>
              <div className='specials-title flex'>
                <div className='specials-name'>Greek Salad</div>
                <div className='specials-price'>$ 12.99</div>
              </div>
              <div className='specials-description'>
                The famous greek salad of scrispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </div>
              <Link to='/' className='specials-order-link'>
                Order a delivery
                <span>
                  <img src={scooter} alt='' />
                </span>
              </Link>
            </div>
          </div>
          <div className='specials-card'>
            <img src={bruschetta} alt='Bruschetta' />
            <div className='specials-content'>
              <div className='specials-title flex'>
                <div className='specials-name'>Bruschetta</div>
                <div className='specials-price'>$ 5.99</div>
              </div>
              <div className='specials-description'>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </div>
              <Link to='/' className='specials-order-link'>
                Order a delivery
                <span>
                  <img src={scooter} alt='' />
                </span>
              </Link>
            </div>
          </div>
          <div className='specials-card'>
            <img src={lemonDessert} alt='Lemon Dessert' />
            <div className='specials-content'>
              <div className='specials-title flex'>
                <div className='specials-name'>Lemon Dessert</div>
                <div className='specials-price'>$ 5.00</div>
              </div>
              <div className='specials-description'>
                This comes straight from grandma's recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </div>
              <Link to='/' className='specials-order-link'>
                Order a delivery
                <span>
                  <img src={scooter} alt='' />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
