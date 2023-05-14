import { Link, NavLink } from 'react-router-dom'
import buscar from '../assets/buscar.png'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
const Header = () => {
  const [dataToSearch, setDataToSearch] = useState('')
  const [verificationValue, setVerificationValue] = useState(false)
  const HandleData = () => {
    // eslint-disable-next-line no-empty
    console.log('test 1')
    if (dataToSearch === '' && dataToSearch.length < 3) { /* empty */ } else {
      setVerificationValue(true)
    }
  }
  console.log(verificationValue)
  return (
    <header>
      <nav className='navbar navbar-expand-md'>
        <div className='container-fluid'>
          <NavLink className='navbar-brand fs-1 fw-bolder' to='/'>Series Plus</NavLink>
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
              <input className='form-control me-2' type='search' placeholder='Busca tu serie' aria-label='Search' value={dataToSearch} onChange={(event) => { setDataToSearch(event.target.value.toLowerCase()) }} />
              <Link onClick={() => { HandleData() }} to={verificationValue ? (`/${dataToSearch}`) : '#'}>
                <img src={buscar} className=' bg-transparent' alt='icon_search' />
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
