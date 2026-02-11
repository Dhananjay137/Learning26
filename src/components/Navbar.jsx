import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              {/* <a href="/NetflixHome">NetFlixHome</a> */}
              <Link className='nav-link' to='/NetflixHome'>NetFilx Home</Link>
            </li>
            <li class="nav-item">
              {/* <a href="/NetflixShows">shows</a> */}
              <Link className='nav-link' to='/NetflixShows'>Shows</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/NetflixMovies'>Movies</Link>
            </li>
            {/* <li className='nav-item'>
              <Link className='nav-link' to='/PlayerHome'>favorite player{`(task)`}</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/IPLHome'>IPL{`(task)`}</Link>
            </li> */}
            {/* <li className='nav-item'>
              <Link className='nav-link' to='/FunctionDemo1'>Function Demo 1</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/UseStateDemo1'>useStae Demo 1</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/UseStateDemo2'>useStae Demo 2</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/UseStateDemo3'>useStae Demo 3</Link>
            </li> */}
            {/* <li className='nav-item'>
              <Link className='nav-link' to='/Employees'>Employees</Link>
            </li> */}
            <li className='nav-item'>
              <Link className='nav-link' to='/InputDemo'>Input Demo</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/InputComponent'>Input Component</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/PropertyHome'>Property Home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/PropertyWishlist'>Property Wishlist</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/InputDemo2'>Input Demo 2</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/FormDemo1'>Form Demo 1</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/FormDemo2'>Form Demo 2</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/FormDemo3'>Form Demo 3</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/FormDemo4'>Form Demo 4</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
