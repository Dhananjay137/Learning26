import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {
  const {register, handleSubmit} = useForm()
  const [userData, setUserData] = useState()
  const [isSubmited, setisSubmited] = useState(false)

  const submitHandler = (data) => {
    console.log(data)
    setUserData(data)
    setisSubmited(true)
  }
  return (
    <div>
      <h1>FormDemo1</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" placeholder='enter name' {...register('name')} />
        </div>
        <div>
          <label>AGE</label>
          <input type="text" placeholder='enter age' {...register('age')} />
        </div>
        <div>
          <label>GENDER</label>
          <br />
          MALE:<input type="radio" value='male' {...register('gender')} />
          FEMALE:<input type="radio" value='female' {...register('gender')} />
        </div>
        <div>
          <label>HOBBY</label>
          <br />
          TRAVEL:<input type="checkbox" value='travel' {...register('hobby')} /> <br />
          CRICKET:<input type="checkbox" value='cricket' {...register('hobby')} /> <br />
          SCROLLING:<input type="checkbox" value='scrolling' {...register('hobby')} /> <br />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
      {
            isSubmited == true && <div>
          <h1>OUTPUT</h1>
          <h1>Name = {userData.name}</h1>
          <h2>Age = {userData.age}</h2>
        </div>
          }
    </div>
  )
}
