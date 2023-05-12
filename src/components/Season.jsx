import { Link } from 'react-router-dom'
import { API_MAIN } from '../api/Endpoint.js'
import { useEffect, useState } from 'react'
import './css/Season.css'
// eslint-disable-next-line react/prop-types
const Season = ({ idSerie }) => {
  const [episodes, setEpisodes] = useState([])
  let count = 1
  useEffect(() => {
    fetch(`${API_MAIN}${idSerie}/episodes`)
      .then(res => res.json()
        .then(data => setEpisodes(data)))
  }, [idSerie])
  const episodesBySeason = episodes.reduce((seasons, episode) => {
    if (!seasons[episode.season]) {
      seasons[episode.season] = []
    }
    seasons[episode.season].push(episode)
    return seasons
  }, {})
  return (
    <>
      {Object.entries(episodesBySeason).map(([season, episodes]) => (
        <div key={season} className='accordion-item'>
          <h2 className='accordion-header' id={`heading${count++}`}>
            <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target={`#collapse${count}`} aria-expanded='true' aria-controls={`collapse${count}`}>
              Temporada {season}
            </button>
          </h2>
          <div id={`collapse${count}`} className='accordion-collapse collapse show' aria-labelledby={`heading${count}`} data-bs-parent='#accordionExample'>
            <div className='accordion-body'>
              <ul>
                {episodes.map((episode) => (
                  <li key={episode.id}><Link to={episode.url}>{episode.name}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Season
