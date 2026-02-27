import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo4 = () => {
  const{ register, handleSubmit, watch, formState:{errors}} = useForm()

  let password = watch('password')

  const validationSchema = {
    passwordValidator:{
      required:{
        value:true,
        message:'password is required'
      }
    },
    confirmPasswordValidator:{
      required:{
        value:true,
        message:'confirm password is required'
      },
      validate: (params) => {
        return params === password || 'confirm password not matched'
      }
    }
  }

  const submitHandler = (data) => {
    console.log(data)
  }
  return (
    <div>
      <h1>FormDemo4-watch</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>PASSWORD</label>
          <input type='password' {...register('password',validationSchema.passwordValidator)}></input>
          {errors.password?.message}
        </div>
        <div>
          <label>CONFIRM PASSWORD</label>
          <input type='password' {...register('confirmPassword',validationSchema.confirmPasswordValidator)}></input>
          {errors.confirmPassword?.message}
        </div>
        <div>
          <input type='submit'></input>
        </div>
      </form>
    </div>
  )
}
