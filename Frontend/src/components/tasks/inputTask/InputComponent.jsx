import React, { useState } from 'react'

export const InputComponent = () => {
  //intial state of use state is string because here onChange event.target.value return stirng
    const[name, setName] = useState("")
    const[age, setAge] = useState("")
    const[email,setEmail] = useState("")
    const[phone, setPhone] = useState("")
    const[password, setPassword] = useState("")
    const[DOB, setDOB] = useState("")
    const[search,setSearch] = useState("")
    const[price, setPrice] = useState("")
    const[file, setFile] = useState("")
    const[color, setColor] = useState("")
    const[gender, setGender] = useState("")
    const[meals, setMeals] = useState([])
  
    const handleName = (event) => {
      console.log(event)
      setName(event.target.value)
    }
    const handleAge = (event) => {
      console.log(event)
      setAge(event.target.value)
    }
    const handleEmail = (event) => {
      console.log(event)
      setEmail(event.target.value)
    }
    const handlePhone = (event) => {
      console.log(event)
      setPhone(event.target.value)
    }
    const handlePassword = (event) => {
      console.log(event)
      setPassword(event.target.value)
    }
    const handleDOB = (event) => {
      console.log(event)
      setDOB(event.target.value)
    }
    const handleSearch = (event) => {
      console.log(event)
      setSearch(event.target.value)
    }
    const handlePrice = (event) => {
      console.log(event)
      setPrice(event.target.value)
    }
    const handleFile = (event) => {
      console.log(event)
      setFile(event.target.value)
    }
    const handleColor = (event) => {
      console.log(event)
      setColor(event.target.value)
    }
    const handleGender = (event) => {
      //console.log(event)
      //setGender(event.target.checked)
      setGender(event.target.value)
    }
    const handleMeal = (event) => {
      //console.log(event)
      const {value, checked} = event.target
      if(checked){
        setMeals([...meals,value])
      }else{
        setMeals(meals.filter((meal) => meal !== value))
      }
    }
  return (
    <div>
      <h1>InputComponent</h1>
      <label>Name</label>
      <input type="text" onChange={(event) => handleName(event)}/>
      {name}
      <br />
      <label>Age</label>
      <input type="number" onChange={(event) => handleAge(event)}/>
      {age}
      <br />
      <label>email</label>
      <input type="email" onChange={(event) => handleEmail(event)}/>
      {email}
      <br />
      <label>phone</label>
      <input type='tel' onChange={(event) => handlePhone(event)}/>
      {phone}
      <br />
      <label>password</label>
      <input type="password" onChange={(event) => handlePassword(event)}/>
      {password}
      <br />
      <label>DOB</label>
      <input type="date" onChange={(event) => handleDOB(event)}/>
      {DOB || 'None'}
      <br />
      <label >search: </label>
      <input type="search" onChange={(event) => handleSearch(event)} />
      {search}
      <br />
      <label>Price: </label>
      <input type="range" onChange={(event) => handlePrice(event)} />
      {price || 'none'}
      <br />
      <label>File: </label>
      <input type="file" onChange={(event) => handleFile(event)} />
      {file||'none'}
      <br />
      <label>color : </label>
      <input type="color" onChange={(event) => handleColor(event)} />
      {color || 'none'}
      <br />
      {/* ----------------------------------------------------------------------------------------------- */}
      <h3>continue....</h3>
      <p>gender: {gender||'none'}</p>
      <label>
        <input type="radio" value='male' name='gender' onChange={(event) => {handleGender(event)}}/>Male
      </label>
      <label>
        <input type="radio" value='female' name='gender' onChange={(event) => {handleGender(event)}}/>Female
      </label>
      <br />
      <p>meal: {meals.join(", ") || 'none'}</p>
      <label><input type="checkbox" value='breakfast' name='meal' onChange={(event) => {handleMeal(event)}} />breakfast</label>
      <label><input type="checkbox" value='lunch' name='meal' onChange={(event) => {handleMeal(event)}} />lunch</label>
      <label><input type="checkbox" value='dinner' name='meal' onChange={(event) => {handleMeal(event)}} />dinner</label>
      <br />
    </div>
  )
}
