import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {
  const{ register, handleSubmit, formState:{errors} } = useForm()

  const validationSchema = {
    nameValidator:{
      required:{
        value:true,
        message:'Name is required'
      }
    },
    contactValidator:{
      required:{
        value:true,
        message:'Contact is required'
      },
      pattern:{
        value:/^[6-9]{1}[0-9]{9}$/,
        message:'Invalid Contact Format'
      }
    },
    promoCodeValidator:{
      required:{
        value:true,
        message:'Promo Code is required'
      },
      validate: (params) => {
        return params === '2026' || 'invalid promo code'
      }
    },
    hobbiesValidator:{
      required:{
        value:true,
        message:'Hobbies are required'
      },
      validate: (params) => {
        return params?.length >= 2 || 'minimum 2 hobbies are required'
      }
    }
  }

  const submitHandler = (data) => {
    console.log(data)
  }
  return (
    <div>
      <h1>FormDemo3</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type='text' {...register('name',validationSchema.nameValidator)}></input>
          {errors.name?.message}
        </div>
        <div>
          <label>CONTACT</label>
          <input type='text' {...register('contact',validationSchema.contactValidator)}></input>
          {errors.contact?.message}
        </div>
        <div>
          <label >PROMO CODE</label>
          <input type='text' {...register('promoCode',validationSchema.promoCodeValidator)}></input>
          {errors.promoCode?.message}
        </div>
        <div>
          <label>HOBBIES</label> <br></br>
          CRICKET:<input type='checkbox' value='cricket' {...register('hobbies',validationSchema.hobbiesValidator)}></input> <br />
          TRAVEL:<input type='checkbox' value='travel' {...register('hobbies',validationSchema.hobbiesValidator)}></input> <br />
          SCROLLING:<input type='checkbox' value='scrolling' {...register('hobbies',validationSchema.hobbiesValidator)}></input> <br />
          {errors.hobbies?.message}
        </div>
        <div>
          <input type='submit'></input>
        </div>
      </form>

    </div>
  )
}
