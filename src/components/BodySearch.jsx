import { useEffect, useState } from 'react'
import { API_SEARCH_BY_NAME } from '../api/Endpoint'
import './css/Body.css'
import { Link, useParams } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const Body = () => {
  const { value } = useParams()
  const [peliculas, setPeliculas] = useState([])
  useEffect(() => {
    fetch(`${API_SEARCH_BY_NAME}${value}`)
      .then(res => res.json())
      .then(data => setPeliculas(data.slice(1, 40)))
      .catch(err => console.error(err))
  }, [value])

  return (
    <main className='containe-card-filter' style={{ paddingTop: '180px' }}>
      {peliculas.map(data => (
        <section key={data.show.id} className='card' style={{ width: '15rem', backgroundColor: 'rgb(27 31 47 / 0%)' }}>
          <img src={data?.show?.image?.medium} className='card-img-top' alt={data.show.name} />
          <aside className='card-body d-flex flex-column'>
            <h5 className='card-title' style={{ textAlign: 'center' }}>{data.show.name}</h5>
            <div>
              <p className='card-text'>{data?.show?.summary?.slice(1, 120).replace(/<\/?p>|<\/?b>|p>|<b|<i>|<\/?i>/g, '')} ... </p>
            </div>
          </aside>
          <div className='card-body-link'>
            <Link to='#' className='card-link'>Ver mas</Link>
          </div>
        </section>
      ))}
    </main>
  )
}

export default Body
