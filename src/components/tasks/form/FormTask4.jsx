import React from 'react'
import { useForm } from 'react-hook-form'

export const FormTask4 = () => {
  const{ register, handleSubmit,watch, formState:{errors} } = useForm()
  let pwd = watch('password')

  console.log('errors-->',errors)
  //console.log('pwd',pwd)
  //console.log('register-->',register)

  const submitHandler = (data) => {
    alert('data is submitted')
    console.log(data)
  }
  return (
    <div>
      <h1>FormTask4</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type='text' {...register('name',{required:{value:true,message:'name is required'}})}></input>
          {errors.name?.message}
        </div>
        <div>
          <label>DOB</label>
          <input type='date' {...register('dob',{required:{value:true,message:'DOB is required'},max:{
            value:new Date().toISOString().split('T')[0],
            message:`maximum date should be today's date`
          }})}></input>
          {errors.dob?.message}
        </div>
        <div>
          <label>AGE</label>
          <input type='text' {...register('age',{required:{value:true,message:'Age is Required'},min:{
            value:18,
            message:'minimum age should be 18'
          },
          max:{
            value:60,
            message:'maximum age shuld be 60'
          }})}></input>
          {errors.age?.message}
        </div>
        <div>
          <label>EMAIL</label>
          <input type='email' {...register('email',{required:{value:true,message:'email is required'},pattern:{
            value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message:'Invalid email format'
          }})}></input>
          {errors.email?.message}
        </div>
        <div>
          <label>PHONE</label>
          <input type='tel' {...register('phone',{required:{value:true,message:'phone no. is required'},pattern:{
            value:/^[0-9]{10}$/,
            message:'Invalid phone number format'
          },
          minLength:{
            value:10,
            message:'minimum length should be 10'
          }
          ,
          maxLength:{
            value:10,
            message:'maximum length should be 10'
          }})}></input>
          {errors.phone?.message}
        </div>
        <div>
          <label>GENDER</label> <br></br>
          MALE:<input type='radio' value='male' {...register('gender',{required:{value:true,message:'gender is required'}})}></input>
          FEMALE:<input type='radio' value='female' {...register('gender',{required:{value:true,message:'gender is required'}})}></input>
          {errors.gender?.message}
        </div>
        <div>
          <label>FILE</label>
          <input type='file' {...register('file',{required:{value:true,message:'file is required'},validate:{
            // 1. Check if at least one file is selected
      acceptedFormats: (files) => 
        ["image/jpeg", "image/png"].includes(files[0]?.type) || 
        "Only JPEG and PNG are allowed",
      
      // 2. Check file size (e.g., max 2MB)
      lessThan2MB: (files) => 
        files[0]?.size < 2 * 1024 * 1024 || 
        "Max size is 2MB"
          }})}></input>
          {errors.files?.message}
        </div>
        <div>
          <label>PASSWORD</label>
          <input type='password' {...register('password',{required:{value:true,message:'password is required'},minLength:{
            value:6,
            message:'minimum length of passowrd should be 6'
          },
          pattern:{
            value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/,
            message:'Must include uppercase, lowercase, number, and a special char (@,$,!,%,*,?,&)'
          }})}></input>
          {errors.password?.message}
        </div>
        <div>
          <label>CONFIRM PASSWORD</label>
          <input type='password' {...register('confirmPassword',{required:{value:true,message:'Please comfirm your password'},validate:{
            matchPassword: (value) => value===pwd || 'Password do not match'
          }})}></input>
          {errors.confirmPassword?.message}
        </div>
        <div>
          <input type='submit'></input>
        </div>
      </form>
    </div>
  )
}
