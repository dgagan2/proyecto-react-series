import React from 'react'
import { Route, Routes } from 'react-router'
import Principal from '../pages/Principal'
import Details from '../pages/Details'
import Main from '../components/Main'
import Header from '../components/Header'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/serie/:idSerie' element={<Details />} />
    </Routes>
  )
}

export default RoutesIndex
