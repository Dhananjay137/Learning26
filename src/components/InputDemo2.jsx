import React, { useState } from 'react'

export const InputDemo2 = () => {
  const [name, setName] = useState("")
  const [gender, setGender] = useState("")
  const [country, setCountry] = useState("")

  const nameHandler = (event) => {
    setName(event.target.value)
  }
  const genderHandler = (event) => {
    setGender(event.target.value)
  }
  return (
    <div>
      <h1>InputDemo2</h1>
      <div>
        <label>NAME: </label>
        <input type='text' onChange={(event) => nameHandler(event)} ></input>
        {name}
      </div>
      <div>
        <label>Gender: </label>
        <br />
        male: <input type="radio" value='male' name='gender' onChange={(event) => genderHandler(event)} />
        female: <input type="radio" value='female' name='gender' onChange={(event) => genderHandler(event)} />
        <br />
        {gender}
      </div>
      <div>
        <label>Country</label>
        <select onChange={(event) => {setCountry(event.target.value)}}>
          <option value="india">INDIA</option>
          <option value="usa">USA</option>
          <option value="china">CHINA</option>
        </select>
        {country}
      </div>
    </div>
  )
}
