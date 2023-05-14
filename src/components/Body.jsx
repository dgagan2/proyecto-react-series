import { useEffect, useState } from 'react'
import { API_MAIN, API_SEARCH_BY_NAME } from '../api/Endpoint'
import './css/Body.css'
import { Link } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const Body = () => {
  const [peliculas, setPeliculas] = useState([])
  useEffect(() => {
    fetch(`${API_MAIN}`)
      .then(res => res.json())
      .then(data => setPeliculas(data.slice(1, 40)))
      .catch(err => console.error(err))
  }, [])
  return (
    <main className='containe-card-filter' style={{ paddingTop: '180px' }}>
      {peliculas.map(data => (
        <section key={data.id} className='card' style={{ width: '15rem', backgroundColor: 'rgb(27 31 47 / 0%)' }}>
          <img src={data?.image?.medium} className='card-img-top' alt={data.name} />
          <aside className='card-body d-flex flex-column'>
            <h5 className='card-title' style={{ textAlign: 'center' }}>{data.name}</h5>
            <div>
              <p className='card-text'>{data?.summary?.slice(1, 120).replace(/<\/?p>|<\/?b>|p>|<b|<i>|<\/?i>/g, '')} ... </p>
            </div>
          </aside>
          <div className='card-body-link'>
            <Link to={`/serie/${data.id}`} className='card-link'>Ver mas</Link>
          </div>
        </section>
      ))}
    </main>
  )
}

export default Body
