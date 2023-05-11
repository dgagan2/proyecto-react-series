import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import noContent from '../assets/noContent.png'

const idep = 1
const API_SEARCH_BY_ID_TVDB = 'https://api.tvmaze.com/lookup/shows?thetvdb='
const API_SEARCH_EPISODES = `https://api.tvmaze.com/shows/${idep}/episodes`
const API_PEOPLE = `https://api.tvmaze.com/shows/${idep}/cast`
const idp = 264492
const Details = () => {
  const [seriesDetails, setSeriesDetails] = useState(null)
  const [episodes, setEpisodes] = useState([])
  const [people, setPeople] = useState([])
  const [kk, setkk] = useState([])
  useEffect(() => {
    fetch(`${API_SEARCH_BY_ID_TVDB}${idp}`)
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
      <main>
        <section>
          {seriesDetails
            ? (
              <section>
                <article>
                  <img src={seriesDetails.image.medium} alt={seriesDetails.name} />
                </article>
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
        <section>
          <h4>Listado de capitulos</h4>
          <ul>
            {episodes.map(x => (

              <li key={x.id}>
                <a href={x.url}>
                  Temporada: {x.season}, Episodio: {x.number}, Nombre: {x.name}
                </a>
              </li>
            ))}
          </ul>
        </section>
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
        <section />
      </main>
    </>
  )
}

export default Details
