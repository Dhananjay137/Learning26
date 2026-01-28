import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'

function App() {
  var year=2026
  var greet='react project'
  var isAvailable = true

  var student = {
    id: 1,
    name: 'manoj',
    city: 'Ahmedabad'
  }

  return (
    <>
    <h1>WELCOME</h1>
    <h2>{greet}</h2>
    <h3>{year}</h3>
    <p>is availabe???{isAvailable == true ? 'TRUE':'FALSE'}</p>
    <h2>ID: {student.id}</h2>
    <h2>Name: {student.name}</h2>
    <h2>city: {student.city}</h2>
    </>
  )
}

export default App
