import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { HeaderComponent } from './components/HeaderComponent'
import { FooterComponent } from './components/FooterComponent'
import { ContentComponent } from './components/ContentComponent'
import { MapDemo } from './components/MapDemo'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo3 } from './components/MapDemo3'
import { MapDemo4 } from './components/MapDemo4'
import { MapDemo5 } from './components/MapDemo5'
import { MapDemo6 } from './components/MapDemo6'
import { MapDemo7 } from './components/MapDemo7'
import { MapDemo8 } from './components/MapDemo8'
import { MapDemo9 } from './components/MapDemo9'
import { MapDemo10 } from './components/MapDemo10'
import { Route, Routes } from 'react-router-dom'
import { NetflixHome } from './components/NetflixHome'
import { Navbar } from './components/Navbar'
import { NetflixMovies } from './components/NetflixMovies'
import { NetflixShows } from './components/NetflixShows'
import { HomeComponent } from './components/HomeComponent'
import { ErrorNotFound } from './components/ErrorNotFound'
import { Watch } from './components/Watch'
//import './App.css'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<HomeComponent/>}></Route>
      <Route path='/*' element={<ErrorNotFound/>}></Route>
      <Route path='/NetflixHome' element={<NetflixHome/>}></Route>
      <Route path='/NetflixShows' element={<NetflixShows/>}></Route>
      <Route path='/NetflixMovies' element={<NetflixMovies/>}></Route>
      <Route path='/Watch/:name' element={<Watch/>}></Route>
    </Routes>
    </>
  )
}

export default App
