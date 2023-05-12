import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import noContent from '../assets/noContent.png'
import AllSeries from '../components/AllSeries'

// eslint-disable-next-line react/prop-types
const Principal = ({ HandleData }) => {
  console.log(HandleData)
  const [peliculas, setPeliculas] = useState([])
  const [filter, setFilter] = useState([])
  const [state, setState] = useState(false)
  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${HandleData}`)
      .then(res => res.json())
      .then(data => setPeliculas(data))
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    const dataFilter = peliculas.map(data => {
      const newData = data.show
      const id = newData.id
      const name = newData.name
      const image = newData.image ? newData.image.original : noContent
      const searchId = newData.externals.thetvdb
      let Summary = newData.summary.slice(1, 180)
      Summary = Summary.replace(/<\/?p>|<\/?b>|p>/g, '')
      return ({ id, name, image, Summary, searchId })
    })
    setFilter(dataFilter)
  }, [peliculas])
  function changeViewCard (name, Summary, image) {
    if (state) {
      return <a style={{ color: 'white' }} className='description' onMouseLeave={() => setState(false)}>{Summary}...</a>
    } else {
      return <img className='card-img-top' src={image} alt={name} onMouseEnter={() => setState(true)} />
    }
  }
  console.log(state)
  return (
    <>
      <Carousel />
      <main>
        {filter.map(data => (
          // eslint-disable-next-line react/jsx-first-prop-new-line
          <div key={data.id} className='card' style={{ width: '13rem', backgroundColor: 'rgb(27 31 47 / 0%)' }}>
            {changeViewCard(data.name, data.Summary, data.image)}
            <div className='card-body'>
              <a style={{ color: 'white' }}>{data.name}</a>
            </div>
          </div>
        ))}
      </main>

    </>
  )
}

export default Principal
