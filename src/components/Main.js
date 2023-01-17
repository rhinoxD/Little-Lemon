import { useState } from 'react'

import contentImage from '../assets/restauranfood.jpg'
import greekSalad from '../assets/greek salad.jpg'
import bruschetta from '../assets/bruchetta.svg'
import lemonDessert from '../assets/lemon dessert.jpg'
import scooter from '../assets/scooter.svg'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <main>
      <div className='hero'>
        <div className='content'>
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <h5>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </h5>
          <button className='btn'>
            <Link to='/booking'>Reserve a Table</Link>
          </button>
        </div>
        <div className='content-image'>
          <img src={contentImage} alt='restaurant-food' />
        </div>
      </div>
      <div className='specials'>
        <div className='heading'>
          <h1>This weeks specials!</h1>
          <button>Online Menu</button>
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
              <button>
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
