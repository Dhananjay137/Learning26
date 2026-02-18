import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const ApiDemo3 = () => {
  const { register,watch,handleSubmit,formState:{errors}} = useForm()

  const validationSchema = {
    nameValidator:{
      required:{
        value:true,
        message:'Name is required'
      }
    },
    ageValidator:{
      required:{
        value:true,
        message:'Age is required'
      },
      min:{
        value:18,
        message:'minimum age should be 18'
      },
      max:{
        value:60,
        message:'maximum age should be 60'
      }
    },
    emailValidator:{
      required:{
        value:true,
        message:'email is required'
      },
      pattern:{
        value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message:'invalid email'
      }
    },
    isActiveValidator:{
      required:{
        value:true, 
        message:'active status is required'
      }
    },
    passwordValidator:{
      required:{
        value:true,
        message:'Password is required'
      },
      pattern:{
        value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8}/,
        message:'password must contain atleast one lowercase,upercase,number,special charater(@,$,!,%,*,?,&) and minimum length should be 8 char'
      }
    },
  }

  const sumbitHandler = async (data) => {
    try {
      const res = await axios.post('https://node5.onrender.com/user/user/',data)
      console.log(res)
      console.log(res.data)
    } catch (error) {
      console.log(error)
      alert('error while adding user')
    }
  }
  return (
    <div>
      <h1>ApiDemo3</h1>
      <form onSubmit={handleSubmit(sumbitHandler)} style={{maxWidth:'550px', margin:'3px auto', border: '1px solid black', padding: '20px', borderRadius:'8px'}}>
        <h2 style={{textAlign:'center'}}>Add User</h2>
        {/* NAME */}
        <div style={{ marginBottom: '15px' }}>
          <label><b>Name</b></label> <br />
          <input type='text' {...register('name',validationSchema.nameValidator)} style={{width: '100%'}}></input>
          {errors.name?.message}
        </div>

        {/* AGE */}
        <div style={{ marginBottom: '15px' }}>
          <label><b>Age</b></label> <br />
          <input type='text' {...register('age',validationSchema.ageValidator)} style={{width: '100%'}}></input>
          {errors.age?.message}
        </div>

        {/* EMAIL */} 
        <div style={{marginBottom: '15px'}}>
          <label><b>Email</b></label><br />
          <input type='email' {...register('email',validationSchema.emailValidator)} style={{width: '100%'}} />
          <p style={{color: 'red'}}>{errors.email?.message}</p>
        </div>

        {/* PASSWORD */}
        <div style={{ marginBottom: '15px' }}>
          <label><b>Password</b></label> <br />
          <input type='password' {...register('password',validationSchema.passwordValidator)} style={{width: '100%'}}></input>
          {errors.password?.message}
        </div>
        {/* isActive */}
        <div style={{marginBottom: '15px'}}>
          <label><b>Active Status:</b></label><br />
          <input type="radio" value='yes' {...register('isActive',validationSchema.isActiveValidator)}/> YES
          <input type="radio" value='no' {...register('isActive',validationSchema.isActiveValidator)} /> NO
        <br />
        {errors?.isActive && <p style={{color: 'red'}}>{errors?.isActive?.message}</p>}
        </div>
        <div>
          <input type='submit' style={{width: '100%'}} className='btn btn-primary rounded'></input>
        </div>
      </form>

    </div>
  )
}
