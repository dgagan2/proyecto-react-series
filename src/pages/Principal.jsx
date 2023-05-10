import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import noContent from '../assets/noContent.png'

const Principal = () => {
  const [peliculas, setPeliculas] = useState([])
  const [filter, setFilter] = useState([])
  const API = (search) => {
    fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
      .then(res => res.json())
      .then(data => setPeliculas(data))
      .catch(err => console.error(err))
  }
  const Search = ({ id, name, image, summary }) => {

  }
  useEffect(() => {
    const x = peliculas.map(data => {
      const b = data.show
      const id = b.id
      const name = b.name
      const img = () => {
        if (b.image.original === null) { return noContent } else {
          return b.image.original
        }
      }
      const image = img()
      let Summary = b.summary.slice(1, 180)
      Summary = Summary.replace(/p>/g, '')
      Summary = Summary.replace(/<\/?b>/g, '')
      Summary = Summary.replace(/p>/g, '')
      return ({ id, name, image, Summary })
    })
    setFilter(x)
  }, [peliculas])
  return (
    <>
      <Header handleSearch={API} />
      <Carousel />

    </>
  )
}

export default Principal
