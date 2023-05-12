import { useEffect, useState } from 'react'
import Header from '../../components/old/Header'
import './css/Details.css'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { API_MAIN, API_SEARCH_BY_NAME } from '../../api/Endpoint'

const Details = () => {
  const API_SEARCH_BY_ID_TVDB = 'https://api.tvmaze.com/shows/'
  const { idSerie } = useParams()
  const API_SEARCH_EPISODES = `https://api.tvmaze.com/shows/${idSerie}/episodes`
  const API_PEOPLE = `https://api.tvmaze.com/shows/${idSerie}/cast`
  const [seriesDetails, setSeriesDetails] = useState(null)
  const [episodes, setEpisodes] = useState([])
  const [people, setPeople] = useState([])
  useEffect(() => {
    fetch(`${API_SEARCH_BY_ID_TVDB}${idSerie}`)
      .then(res => res.json())
      .then(data => setSeriesDetails(data))
  }, [])
  useEffect(() => {
    fetch(API_SEARCH_EPISODES)
      .then(res => res.json()
        .then(data => setEpisodes(data)))
  }, [seriesDetails])
  useEffect(() => {
    fetch(API_PEOPLE)
      .then(res => res.json())
      .then(data => setPeople(data))
  }, [episodes])

  return (
    <>
      <Header />
      <main className='Container-details'>
        <section>
          {seriesDetails
            ? (
              <section className='Serie-details'>
                <img src={seriesDetails?.image?.medium} alt={seriesDetails.name} />
                <div>
                  <h3>{seriesDetails.name}</h3>
                  <p>{seriesDetails.summary.replace(/<\/?p>|<\/?b>/g, '')}</p>
                  <p>Idioma : {seriesDetails.language}</p>
                  <p>Genero: {seriesDetails.genres}</p>
                </div>

              </section>
              )
            : (
              <p>Loading...</p>
              )}
        </section>
        <section className='List-chapters'>
          <h4>Listado de capitulos</h4>
          <ul>
            {episodes.map(x => (

              <li key={x.id}>
                <Link to={x.url}>
                  Temporada: {x.season}, Episodio: {x.number}, Nombre: {x.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section className='containerCast'>
          <aside>
            <h2>Elenco</h2>
          </aside>
          <aside className='Cast'>
            {people
              ? (
                  people.map(x => (
                    <aside key={x.person.id}>
                      <div className='photo'>
                        <img src={x.person.image.medium} alt='' />
                      </div>
                      <p>{x.person.name}</p>
                    </aside>
                  )))
              : (<p>Loading</p>)}
          </aside>

        </section>
      </main>
    </>
  )
}

export default Details
