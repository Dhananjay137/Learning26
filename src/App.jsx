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
import { PlayerHome } from './components/tasks/myFavoritePlayer/PlayerHome'
import { IPLHome } from './components/tasks/ipl/IPLHome'
import { TeamDetails } from './components/tasks/ipl/TeamDetails'
import { FunctionDemo1 } from './components/FunctionDemo1'
import { UseStateDemo1 } from './components/UseStateDemo1'
import { UseStateDemo2 } from './components/UseStateDemo2'
import { UseStateDemo3 } from './components/UseStateDemo3'
import { Employees } from './components/Employees'
import { InputDemo } from './components/InputDemo'
import { InputComponent } from './components/tasks/inputTask/InputComponent'
import { PropertyHome } from './components/tasks/propsTask/PropertyHome'
import { PropertyWishlist } from './components/tasks/propsTask/PropertyWishlist'
import { InputDemo2 } from './components/InputDemo2'
import { FormDemo1 } from './components/form/FormDemo1'
import { FormDemo2 } from './components/form/FormDemo2'
import { FormDemo3 } from './components/form/FormDemo3'
import { FormDemo4 } from './components/form/FormDemo4'
import { InputComponent2 } from './components/tasks/inputTask/inputComponent2'
import { InputComponent2V2 } from './components/tasks/inputTask/InputComponent2V2'
import { FormDemo5 } from './components/form/FormDemo5'
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
      <Route path='/FunctionDemo1' element={<FunctionDemo1/>}></Route>
      <Route path='/UseStateDemo1' element={<UseStateDemo1/>}></Route>
      <Route path='/UseStateDemo2' element={<UseStateDemo2/>}></Route>
      <Route path='/UseStateDemo3' element={<UseStateDemo3/>}></Route>
      <Route path='/Employees' element={<Employees/>}></Route>
      <Route path='/InputComponent' element={<InputComponent/>}></Route>
      <Route path='/InputDemo2' element={<InputDemo2/>}></Route>

      <Route path='/FormDemo1' element={<FormDemo1/>}></Route>
      <Route path='/FormDemo2' element={<FormDemo2/>}></Route>
      <Route path='/FormDemo3' element={<FormDemo3/>}></Route>
      <Route path='/FormDemo4' element={<FormDemo4/>}></Route>
      <Route path='/FormDemo5' element={<FormDemo5/>}></Route>


      {/* input task */}
      <Route path='/InputDemo' element={<InputDemo/>}></Route>
      <Route path='/InputComponent2' element={<InputComponent2/>}></Route>
      <Route path='/InputComponent2V2' element={<InputComponent2V2/>}></Route>

      {/* props task */}
      <Route path='/PropertyHome' element={<PropertyHome/>}></Route>
      <Route path='/PropertyWishlist' element={<PropertyWishlist/>}></Route>

      {/*my favorite player */}
      <Route path='/PlayerHome' element={<PlayerHome/>}></Route>

      {/*IPL */}
      <Route path='/IPLHome' element={<IPLHome/>}></Route>
      <Route path='/TeamDetails/:teamName' element={<TeamDetails/>}></Route>

    </Routes>
    </>
  )
}

export default App
