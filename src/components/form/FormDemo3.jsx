import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
  const {register, handleSubmit} = useForm()
  const [propertyData, setPropertyData] = useState()
  const [isSubmited, setSubmited] = useState(false)

  const submitHandler = (data) => {
    console.log(data)
    setPropertyData(data)
    setSubmited(true)
  }
  return (
    <div>
      <h1>FormDemo3</h1>
      <h1>Property Details</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>PROPERTY NAME</label>
          <input type='text' {...register('name')}></input>
        </div>
        <div>
          <label>CITY</label>
          <input type='text' {...register('city')}></input>
        </div>
        <div>
          <label>PROPERTY TYPE</label> <br />
          PG: <input type='radio' value='PG' {...register('type')}></input> <br />
          FLAT: <input type='radio' value='FLAT' {...register('type')}></input> <br />
        </div>
        <div>
          <label>status</label> <br />
          ACTIVE: <input type='radio' value='ACTIVE' {...register('status')}></input> <br />
          DEACTIVE: <input type='radio' value='DEACTIVE' {...register('status')}></input> <br />
          RENT OUT: <input type='radio' value='RENT OUT' {...register('status')}></input> <br />
        </div>
        <div>
          <label>MEAL</label> <br />
          BREAKFAST: <input type='checkbox' value='breakfast' {...register('meal')}></input> <br />
          LUNCH:: <input type='checkbox' value='lunch' {...register('meal')}></input> <br />
          DINNER: <input type='checkbox' value='dinner' {...register('meal')}></input> <br />
        </div>
        <input type='submit'></input>
      </form>
      {
        isSubmited == true && (
          <div>
            <h1>OUTPUT</h1>
            <h3>NAME: {propertyData.name}</h3>
            <h3>TYPE: {propertyData.type}</h3>
            <h3>CITY: {propertyData.city}</h3>
            <h3>STATUS: {propertyData.status}</h3>
            <h3>MEAL: {propertyData.meal.map((m) => <li>{m}</li>)}</h3>
          </div>
        )
      }
    </div>
  )
}
