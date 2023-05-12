import React, { useEffect, useState } from 'react'
import { API_MAIN } from '../api/Endpoint'
import './css/Carrousel.css'
const Carrousel = () => {
  const [images, setImages] = useState([])
  useEffect(() => {
    fetch(API_MAIN)
      .then(res => res.json())
      .then(data => setImages(data.slice(10, 30)))
  }, [])
  return (
    <section style={{ opacity: '0.7' }} className='Carousel'>
      <div id='carouselSeries' className='carousel slide d-flex' data-bs-ride='carousel'>
        <div className='carousel-inner'>
          <div className='carousel-item active' data-bs-interval='50' />
          {images.map(data => (
            <div key={data.id} className='carousel-item' data-bs-interval='9000'>
              <img src={data?.image?.original} className='d-block w-100' alt={`${data.id} slide`} />
            </div>
          ))}
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

export default Carrousel
