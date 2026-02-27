import React from 'react'
import { useForm } from 'react-hook-form'

export const FormTask6 = () => {
  const{ register, handleSubmit, watch, formState:{errors}} = useForm()

  let password = watch('password')

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
    addressValidator:{
      required:{
        value:true,
        message:'Address is required'
      },
      minLength:{
        value:5,
        message:'minimum char should be 5'
      },
      maxLength:{
        value:200,
        message:'maximum char should be 20'
      }
    },
    contactValidator:{
      required:{
        value:true,
        message:'Contact is required'
      },
      pattern:{
        value:/^[6-9]{1}[0-9]{9}/,
        message:'invalid contact format'
      },
      maxLength:{
        value:10,
        message:'maximum length should be 10'
      }
    },
    fileValidator:{
      required:{
        value:true,
        message:'File is required'
      },
      validateType: (file) => {
        //console.log(file[0].type)
        return file[0].type.include['image/png','image/jpeg'] || 'only png and jpeg are acceptable'
      },
      validateSize: (file) => {
        return file[0].size <= 2 * 1024 * 1024 || 'maximum 2 MB file is acceptable'
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
    confirmPasswordValidator:{
      required:{
        value:true,
        message:'Confirm Password is required'
      },
      validate: (params) => {
        return params === password || 'confirm password do not matched'
      }
    }
  }
  const submitHandler = (data) => {
    console.log(data)
  }
  return (
    <div>
      <h1>FormTask6</h1>
      <form onSubmit={handleSubmit(submitHandler)} style={{maxWidth: '550px', margin: '30px auto', padding: '20px',border: '1px solid black',borderRadius:'8px'}}>

        {/* NAME */}
        <div style={{ marginBottom: '15px' }}>
          <label><b>NAME</b></label> <br />
          <input type='text' {...register('name',validationSchema.nameValidator)} style={{width: '100%'}}></input>
          {errors.name?.message}
        </div>

        {/* AGE */}
        <div style={{ marginBottom: '15px' }}>
          <label><b>AGE</b></label> <br />
          <input type='text' {...register('age',validationSchema.ageValidator)} style={{width: '100%'}}></input>
          {errors.age?.message}
        </div>

        {/* ADDRESS */}
        <div style={{ marginBottom: '15px' }}>
          <label><b>ADDRESS</b></label> <br />
          {/* <input type='textarea' {...register('address',validationSchema.addressValidator)}></input> */}
          <textarea cols="30" rows="3" {...register('address',validationSchema.addressValidator)} style={{width: '100%'}}></textarea>
          {errors.address?.message}
        </div>

        {/* CONTACT */}
        <div style={{ marginBottom: '15px' }}>
          <label><b>CONTACT</b></label> <br />
          <input type='tel' {...register('contact',validationSchema.contactValidator)} style={{width: '100%'}}></input>
          {errors.contact?.message}
        </div>

        {/* PROFILE PHOTO */}
        <div style={{ marginBottom: '15px' }}>
          <label><b>PROFILE PHOTO</b></label> <br />
          <input type='file' {...register('file',validationSchema.fileValidator)} style={{width: '100%'}}></input>
          {errors.file?.message}
        </div>

        {/* PASSWORD */}
        <div style={{ marginBottom: '15px' }}>
          <label><b>PASSWORD</b></label> <br />
          <input type='password' {...register('password',validationSchema.passwordValidator)} style={{width: '100%'}}></input>
          {errors.password?.message}
        </div>

        {/* CONFIRM PASSWORD */}
        <div style={{ marginBottom: '15px' }}>
          <label><b>CONFIRM PASSWORD</b></label> <br />
          <input type='password' {...register('confirmPassword',validationSchema.confirmPasswordValidator)} style={{width: '100%'}}></input>
          {errors.confirmPassword?.message}
        </div>

        {/* SUBMIT */}
        <div>
          <input type='submit' style={{width: '100%',padding:'10px', backgroundColor:'#008cff',color:'#ffffff', border:'none', borderRadius:'4px',cursor:'pointer'}}></input>
        </div>
      </form>
    </div>
  )
}
