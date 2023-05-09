import { useState } from 'react'
import './App.css'
import Header from './components/Header'
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Main from './components/Main'

function App () {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
