import React from 'react'
import { useForm } from 'react-hook-form'

export const FormTask7 = () => {
  const{ register, handleSubmit, watch, formState:{errors} } = useForm()

  // console.log('errors:',errors)

  let password = watch('password') || ''
  // console.log('pwd:',password)

  //validation logic
  const validation = [
    {label:'At least 1 uppercase letter',test:/[A-Z]/.test(password)},
    {label:'At least 1 lowercase letter',test:/[a-z]/.test(password)},
    {label:'At least 1 digit',test:/[0-9]/.test(password)},
    {label:'At least 1 special character',test:/[@$!%*?&]/.test(password)},
    {label:'Minimum 8 charaters',test:password?.length >= 8},
  ]

  const validationSchema = {
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
    passwordValidator:{
      required:{
        value:true,
        message:'Password is required'
      },
      pattern:{
        value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{8}/,
        message:'invalid password'
      },
    }
  }

  const submitHandler = (data) => {
    console.log(data)
  }
  const textColorHelper = (isValid) => {
    if(password?.length === 0) return 'black'
    return isValid? 'green' : 'red'
  }
  return (
    <div>
      <h1>FormTask7</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>EMAIL</label><br />
          <input type='email' {...register('email',validationSchema.emailValidator)} />
          <p style={{color: 'red'}}>{errors.email?.message}</p>
        </div>
        <div>
          <label>PASSWORD</label><br />
          <input type='password' {...register('password',validationSchema.passwordValidator)} />

          {validation.map((type,index) => (<p key={index} style={{color: textColorHelper(type.test)}}>{type.label}</p>))}

          {/* <p style={{color: password?.length==0 ? 'black' : ( /[a-z]/.test(password) ? 'green' : 'red')}}>one character uppercase</p>

          <p style={{color: password?.length==0 ? 'black' : (/[A-Z]/.test(password) ? 'green' : 'red')}}>one character lowercase</p>

          <p style={{color: password?.length==0 ? 'black' : (/[0-9]/.test(password) ? 'green' : 'red')}}>one character digit</p>

          <p style={{color: password?.length==0 ? 'black' : (/[@$!%*?&]/.test(password) ? 'green' : 'red')}}>one character special[@,$,!,%,*,?,&]</p>

          <p style={{color: password?.length==0 ? 'black' : (password?.length >= 8 ? 'green' : 'red')}}>8 length</p> */}

          <p style={{color: 'red'}}>{errors.password?.message}</p>
        </div>
        <div>
          <input type='submit'></input>
        </div>
      </form>
    </div>
  )
}
