import React, { useEffect, useState } from 'react'

const AllSeries = ({ MainView }) => {
  const api = 'https://api.tvmaze.com/shows'
  const [peliculas, setPeliculas] = useState([])
  const [filterLimitPeliculas, setFilterLimitPeliculas] = useState([])
  useEffect(() => {
    fetch(api)
      .then(res => res.json())
      .then(data => setPeliculas(data))
  }, [])
  useEffect(() => {
    setFilterLimitPeliculas(peliculas.slice(1, 37))
  }, [peliculas])
  // return ({{MainView(filterLimitPeliculas)}})
}

export default AllSeries
