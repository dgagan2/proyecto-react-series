import buscar from '../assets/buscar.png'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Main from './Main'
import Principal from '../pages/Principal'
import { useParams } from 'react-router'

const Header = () => {
  const { idSerie } = useParams()
  const [dataToLook, setDataToLoook] = useState('')
  const [state, setState] = useState(true)
  const HandleData = () => {
    // eslint-disable-next-line no-empty
    if (dataToLook === '' && dataToLook.length < 3) {
    } else {
      setState(false)
    }
  }
  return (
    <>
      <header>
        <nav className='navbar navbar-expand-md'>
          <div className='container-fluid'>
            <a className='navbar-brand fs-1 fw-bolder' href='/'>Series Plus</a>
            <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/'>Acción</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/'>Aventura</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/'>Anime</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/'>Comedia</NavLink>
                </li>
              </ul>
              <form className='d-flex' role='search'>
                <input className='form-control me-2' type='search' placeholder='Busca tu serie' aria-label='Search' value={dataToLook} onChange={(event) => { setDataToLoook(event.target.value.toLowerCase()) }} />
                <button className='SearchContent' type='button'><img src={buscar} className=' bg-transparent' alt='icon_search' onClick={() => { HandleData() }} /></button>
              </form>
            </div>
          </div>
        </nav>
      </header>
      {idSerie
        ? (null)
        : (
            state ? <Main /> : (<Principal HandleData={dataToLook} />))}
    </>
  )
}

export default Header
