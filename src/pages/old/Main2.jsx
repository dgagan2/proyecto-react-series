import React, { useEffect, useState } from 'react'
import Carousel from '../../components/old/Carousel'
import noContent from '../assets/noContent.png'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const Principal = ({ HandleData }) => {
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
      Summary = Summary.replace(/<\/?p>|<\/?b>|p>|<i>/g, '')
      return ({ id, name, image, Summary, searchId })
    })
    setFilter(dataFilter)
  }, [peliculas])
  function changeViewCard (id, name, Summary, image) {
    if (state) {
      return <Link style={{ color: 'white' }} to={`/serie/${id}`} className='description' onMouseLeave={() => setState(false)}>{Summary}...</Link>
    } else {
      return <img className='card-img-top' src={image} alt={name} onMouseEnter={() => setState(true)} />
    }
  }
  return (
    <>
      <Carousel />
      <main className='containe-card-filter'>
        {filter.map(data => (
          // eslint-disable-next-line react/jsx-first-prop-new-line
          <div key={data.id} className='card' style={{ width: '13rem', backgroundColor: 'rgb(27 31 47 / 0%)' }}>
            {changeViewCard(data.id, data.name, data.Summary, data.image)}
            <div className='card-body'>
              <Link style={{ color: 'white' }} to={`/serie/${data.id}`}>{data.name}</Link>
            </div>
          </div>
        ))}
      </main>

    </>
  )
}

export default Principal
