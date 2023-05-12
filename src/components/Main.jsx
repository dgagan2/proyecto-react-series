import React, { useEffect, useState } from 'react'
import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom'
const Main = () => {
  const api = 'https://api.tvmaze.com/shows'
  const [peliculas, setPeliculas] = useState([])
  const [filterLimitPeliculas, setFilterLimitPeliculas] = useState([])
  const [state, setState] = useState(false)
  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(data => setPeliculas(data))
  }, [])
  useEffect(() => {
    setFilterLimitPeliculas(peliculas.slice(1, 37))
  }, [peliculas])
  function deleteTextFromString (id, urlImage, name, texto, urlSerie) {
    if (state) {
      const deleteText = texto.slice(1, 180)
      const summary = deleteText.replace(/<\/?p>|<\/?b>/g, '')
      return <Link key={id} to='' style={{ color: 'white' }} className='description' onMouseLeave={() => setState(false)}>{summary}...</Link>
    } else {
      return <img key={id} className='card-img-top' src={urlImage} alt={name} onMouseEnter={() => setState(true)} />
    }
  }
  return (
    <>
      <Carousel />
      <main>
        {filterLimitPeliculas.map(data => (
          <div key={data.id} className='card' style={{ width: '13rem', backgroundColor: 'rgb(27 31 47 / 0%)' }}>
            {deleteTextFromString(data.id, data.image.original, data.name, data.summary, data.url)}
            <div className='card-body'>
              <Link style={{ color: 'white' }} to={data.url}>{data.name}</Link>
            </div>
          </div>
        ))}
      </main>
    </>
  )
}

export default Main
