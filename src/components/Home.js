import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src='https://m.media-amazon.com/images/I/61KtzEF0wzL._SX3000_.jpg' alt='' />

        <div className='home__row'>
          <Product id='123456' title='Kindle Paperwhite' price={19.99} rating={5} image='https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/Y2Q0MTRkOTYt/Y2Q0MTRkOTYt-MTA2NzNlNWQt-w758._SY608_CB622487738_.jpg'/>
          <Product id='234567' title='Air Purifier' price={120.99} rating={4} image='https://m.media-amazon.com/images/I/81nSTa7VMfL._AC_SL1500_.jpg'/>
        </div>

        <div className='home__row'>
          <Product id='345678' title='Adjustable Desk' price={99.99} rating={4} image='https://m.media-amazon.com/images/I/71N45TUkTQS._AC_SL1500_.jpg'/>
          <Product id='456789' title='UniPest [4 Pack] Pest Control' price={11.99} rating={5} image='https://m.media-amazon.com/images/I/51ASzqgn9hS._AC_SL1500_.jpg'/>
          <Product id='567890' title='LED Bathroom Vanity Mirror' price={205.99} rating={3} image='https://m.media-amazon.com/images/I/61KBV1wqyyL._AC_SL1500_.jpg'/>
        </div>

        <div className='home__row'>
          <Product id='678901' title='Thermostatic Shower Panel' price={321.99} rating={4} image='https://m.media-amazon.com/images/I/71JgQDBHUZL._AC_SL1500_.jpg'/>
        </div>
      </div>
    </div>
  )
}

export default Home