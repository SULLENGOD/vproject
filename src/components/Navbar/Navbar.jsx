import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
      <>
        <nav className='navbar navbar-dark bg-dark'>
            <div className='container-fluid'>
                <a href="." className='navbar-brand'>Vicio</a>
                <form action="." className='d-flex'>
                    <input type="search" placeholder='Artist' className='form-control me-2' />
                    <button className='btn btn-outline-succes' type='submit'>Buscar</button>
                </form>
                
            </div>
        </nav>
      </>
  )
}

export { Navbar }