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

      <section id='testmonials-section' className='testimonials-section'>
        <div className='container'>
          <h2>Testimonials</h2>

          <div className='grid testimonials-grid'>
            <div className='testimonials-card'>
              <div className='testimonials-rating'>Rating: 5</div>

              <div className='testmonial-user'>
                <img
                  src='/assets/images/avatar.png'
                  alt='avatar'
                  style={{ height: '150px', width: '150px' }}
                />
                <div className='testimonials-name'>Julia J.</div>
              </div>

              <div className='testimonials-description'>
                Man, this thing is getting better and better as I learn more
                about it. Your company is truly upstanding and is behind its
                product 100%. I didn't even need training.
              </div>
            </div>

            <div className='testimonials-card'>
              <div className='testimonials-rating'>Rating: 4</div>

              <div className='testmonial-user'>
                <img src='/assets/images/avatar2.jpg' alt='avatar2' />
                <div className='testimonials-name'>Raquel O.</div>
              </div>

              <div className='testimonials-description'>
                I love your system. Little lemon restaurant is worth much more
                than I paid. I am really satisfied with my Little lemon
                restaurant.
              </div>
            </div>

            <div className='testimonials-card'>
              <div className='testimonials-rating'>Rating: 5</div>

              <div className='testmonial-user'>
                <img src='/assets/images/avatar3.webp' alt='avatar3' />
                <div className='testimonials-name'>Mollie I.</div>
              </div>

              <div className='testimonials-description'>
                Little lemon restaurant was the best investment I ever made.
                Thanks guys, keep up the good work! It's really wonderful.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main
