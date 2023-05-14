import { Route, Routes } from 'react-router'
import Details from '../pages/Details'
import Home from '../pages/Home'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:value' element={<Home />} />
      <Route path='/serie/:idSerie' element={<Details />} />
    </Routes>
  )
}

export default RoutesIndex
