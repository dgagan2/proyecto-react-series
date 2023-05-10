import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import noContent from '../assets/noContent.png'
import AllSeries from '../components/AllSeries'

const Principal = () => {
  const [peliculas, setPeliculas] = useState([])
  const [filter, setFilter] = useState([])
  const [state, setState] = useState(false)
  const [emptyValue, setEmptyValue] = useState(false)
  const API = (search) => {
    if (search === '' && search.length < 3) {
    } else {
      setEmptyValue(true)
      fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
        .then(res => res.json())
        .then(data => setPeliculas(data))
        .catch(err => console.error(err))
    }
  }
  useEffect(() => {
    const dataFilter = peliculas.map(data => {
      const newData = data.show
      const id = newData.id
      const name = newData.name
      const image = newData.image ? newData.image.original : noContent
      let Summary = newData.summary.slice(1, 180)
      Summary = Summary.replace(/<p>/, '')
      Summary = Summary.replace(/<b>/, '')
      Summary = Summary.replace(/p>/, '')
      Summary = Summary.replace(/i>/, '')
      return ({ id, name, image, Summary })
    })
    setFilter(dataFilter)
  }, [peliculas])
  function changeViewCard (name, Summary, image) {
    if (state) {
      return <a style={{ color: 'white' }} className='description'>{Summary}...</a>
    } else {
      return <img className='card-img-top' src={image} alt={name} />
    }
  }
  const MainView =(Peliculas){
    
  }
  emptyValue ? null :()=>{AllSeries MainView={MainView}}
  return (
    <>
      <Header handleSearch={API} />
      <Carousel />
      <main>
        {filter.map(data => (
          // eslint-disable-next-line react/jsx-first-prop-new-line
          <div key={data.id} className='card' style={{ width: '13rem', backgroundColor: 'rgb(27 31 47 / 0%)' }}
          // eslint-disable-next-line react/jsx-indent-props
          onMouseEnter={() => setState(true)} onMouseLeave={() => setState(false)}
          >
            {changeViewCard(data.name, data.Summary, data.image)}
            <div className='card-body'>
              <a style={{ color: 'white' }}>{data.name}</a>
            </div>
          </div>
        ))}
      </main>

    </>
  )
}

export default Principal
