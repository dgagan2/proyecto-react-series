import React from 'react'
import Carrousel from '../components/Carrousel'
import './css/Home.css'
import Body from '../components/Body'
import { useParams } from 'react-router'
import BodySearch from '../components/BodySearch'

const Home = () => {
  const { value } = useParams()
  return (
    <>
      <Carrousel />
      {value ? <BodySearch /> : <Body />}
    </>
  )
}

export default Home
