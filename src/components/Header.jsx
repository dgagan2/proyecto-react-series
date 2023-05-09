import Carousel from './Carousel'
import buscar from '../assets/buscar.png'

const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-md'>
        <div className='container-fluid'>
          <a className='navbar-brand fs-1 fw-bolder' href='#'>Series Plus</a>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Acción</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Aventura</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Anime</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Comedia</a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>Terror</a>
              </li>
            </ul>
            <form className='d-flex' role='search'>
              <input className='form-control me-2' type='search' placeholder='Busca tu serie' aria-label='Search' />
              <button className='SearchContent' type='button'><img src={buscar} className=' bg-transparent' alt='icon_search' /></button>
            </form>
          </div>
        </div>
      </nav>
      <Carousel />
    </header>
  )
}

export default Header
