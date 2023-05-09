import React, { useEffect, useState } from 'react'

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
  function deleteTextFromString (urlImage, name, texto, urlSerie) {
    if (state) {
      let deleteText = texto.slice(1, 180)
      deleteText = deleteText.replace(/p>/g, '')
      deleteText = deleteText.replace(/<\/?b>/g, '')
      const summary = deleteText.replace(/p>/g, '')
      return <a href={urlSerie} style={{ color: 'white' }} className='description' >{summary}...</a>
    } else {
      return <img className='card-img-top' src={urlImage} alt={name} />
    }
  }
  return (
    <>
      <main>
        {filterLimitPeliculas.map(data => (
          <div key={data.id} className='card' style={{ width: '13rem', backgroundColor: 'rgb(27 31 47 / 0%)' }} onMouseEnter={() => setState(true)} onMouseLeave={() => setState(false)}>
            {deleteTextFromString(data.image.original, data.name, data.summary, data.url)}
            <div className='card-body'>
              <a style={{ color: 'white' }} href={data.url}>{data.name}</a>
            </div>
          </div>
        ))}
      </main>
    </>
  )
}

export default Main
