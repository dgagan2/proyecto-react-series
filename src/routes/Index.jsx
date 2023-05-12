import { Route, Routes } from 'react-router'
import Details from '../pages/Details'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/:idSerie' element={<Details />} />
      <Route path='/serie/:idSerie' element={<Details />} />
    </Routes>
  )
}

export default RoutesIndex
