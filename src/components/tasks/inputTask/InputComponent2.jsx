import React, { useState } from "react";

export const InputComponent2 = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({})
  const [isSubmited, setSubmited] = useState(false)

  const geoData = {
  India: [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
  ],

  USA: [
    "California",
    "Texas",
    "Florida",
    "New York",
    "Illinois"
  ],

  Canada: [
    "Ontario",
    "Quebec",
    "Alberta",
    "British Columbia"
  ]
};
  const handleSubmit = () => {
    let data = {name,age,phone,country,state,password}
    setUserData(data)
    setSubmited(true)
    console.log(data)
  }
  const handleCountry = (event) => {
    setCountry(event.target.value)
    setState('')
  }

  return (
    <div>
      <h1>InputComponent2</h1>
      <div>
        <label>Name:</label>
        <input type="text" onChange={(event) => {setName(event.target.value)}}></input>
      </div>
      <div>
        <label>Age:</label>
        <input type="text" onChange={(event) => {setAge(event.target.value)}}></input>
      </div>
      <div>
        <label>Phone:</label>
        <input type="tel" onChange={(event) => {setPhone(event.target.value)}}></input>
      </div>
      <div>
        <label>Country:</label>
        <select onChange={(event) => {handleCountry(event)}}>
          <option value=''>select country</option>
          {Object.keys(geoData).map((cn) => <option key={cn} value={cn}>{cn}</option>)}
        </select>
      </div>
      <div>
        <label>State:</label>
        <select onChange={(event) => {setState(event.target.value)}}>
          <option value=''>select state</option>
          {country && geoData[country].map((st) => <option key={st} value={st}>{st}</option>)}
        </select>
      </div>
      
      <div>
        <label>Password</label>
        <input type="password" onChange={(event) => {setPassword(event.target.value)}}></input>
      </div>
      
      <button type="submit" onClick={()=> {handleSubmit()}}>submit</button>
      <hr />
      {isSubmited == true && (
        <div style={{backgroundColor:"whitesmoke", padding:'10px'}}>
        <h2>OUTPUT</h2>
        <p><strong>NAME:</strong> {userData.name}</p>
        <p><strong>AGE:</strong> {userData.age}</p>
        <p><strong>PHONE:</strong> {userData.phone}</p>
        <p><strong>COUNTRY:</strong> {userData.country}</p>
        <p><strong>STATE:</strong> {userData.state}</p>
        <p><strong>PASSWORD:</strong> {userData.password}</p>
      </div>
      )}
    </div>
  );
};
