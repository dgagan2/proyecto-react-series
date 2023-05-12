import { useEffect, useState } from 'react'
import { API_SEARCH_BY_NAME } from '../api/Endpoint'

const Body = () => {
  const [peliculas, setPeliculas] = useState([])
  const [filter, setFilter] = useState([])
  const [state, setState] = useState(false)
  useEffect(() => {
    fetch(`${API_SEARCH_BY_NAME}${HandleData}`)
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
      {/*
    <div className="card" style="width: 18rem;" id=''>
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div> */}
    </main>
  )
}

export default Body
