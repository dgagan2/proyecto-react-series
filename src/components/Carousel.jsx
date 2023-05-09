import { useEffect, useState } from 'react'
import uno from '../assets/carousel_img/uno.jpg'
import tres from '../assets/carousel_img/tres.jpg'
import dos from '../assets/carousel_img/dos.jpg'
const Carousel = () => {
  return (
    <section>
      <div id='carouselSeries' className='carousel slide d-flex' data-bs-ride='carousel'>
        <div className='carousel-inner w-75'>
          <div className='carousel-item active' data-bs-interval='10000'>
            <img src={uno} className='d-block w-100' alt='...' />
          </div>
          <div className='carousel-item' data-bs-interval='10000'>
            <img src={dos} className='d-block w-100' alt='...' />
          </div>
          <div className='carousel-item' data-bs-interval='10000'>
            <img src={tres} className='d-block w-100' alt='...' />
          </div>
        </div>
        <button className='carousel-control-prev' type='button' data-bs-target='#carouselSeries' data-bs-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='visually-hidden'>Previous</span>
        </button>
        <button className='carousel-control-next' type='button' data-bs-target='#carouselSeries' data-bs-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </section>

  )
}
export default Carousel
