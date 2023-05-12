import { useEffect, useState } from 'react'
import './css/Details.css'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { API_MAIN } from '../api/Endpoint.js'
import Season from '../components/Season'

const Details = () => {
  const { idSerie } = useParams('')
  const [seriesInformation, setSeriesInformation] = useState(null)
  const [cast, setCast] = useState([])
  useEffect(() => {
    fetch(`${API_MAIN}${idSerie}`)
      .then(res => res.json())
      .then(data => setSeriesInformation(data))
  }, [idSerie]) // Se trae informaciòn de la serie(nombre, descripcion etc)
  useEffect(() => {
    fetch(`${API_MAIN}${idSerie}/cast`)
      .then(res => res.json())
      .then(data => setCast(data))
  }, [idSerie])
  console.log(`${API_MAIN}${idSerie}/episodes`)
  // se verificar si seriesInformation es null. Si es así, se establece un objeto vacío como valor predeterminado para la desestructuración.
  const { name, summary, language, genres, image } = seriesInformation || {}
  // || se utiliza para establecer un objeto vacío como valor predeterminado para la desestructuración si seriesInformation es null. Si seriesInformation no es null, entonces se usa el objeto seriesInformation para la desestructuración
  return (
    <main className='Container-details d-flex flex-column gap-5'>
      <section>
        {seriesInformation
          ? (
            <section className='Serie-details'>
              <img src={image?.medium} alt={name} />
              <div>
                <h3>{name}</h3>
                <p>{summary.replace(/<\/?p>|<\/?b>/g, '')}</p>
                <p>Idioma : {language}</p>
                <p>Genero: {genres}</p>
              </div>

            </section>
            )
          : (
            <p>Loading...</p>
            )}
      </section>
      <section className='List-chapters'>
        <h4>Listado de capitulos</h4>
        <div className='accordion' id='accordionExample'>
          <Season idSerie={idSerie} />
        </div>
      </section>
      <section className='containerCast'>
        <aside>
          <h2>Elenco</h2>
        </aside>
        <aside className='Cast'>
          {cast
            ? (
                cast.map(data => (
                  <aside key={data.person.id}>
                    <div className='photo'>
                      <img src={data?.person?.image?.medium} alt='' />
                    </div>
                    <p>{data.person.name}</p>
                  </aside>
                )))
            : (<p>Loading</p>)}
        </aside>

      </section>
    </main>
  )
}

export default Details
