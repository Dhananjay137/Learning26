import React from 'react'
import { useForm } from 'react-hook-form';

export const FormTask5 = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onTouched" // Validates when user leaves the input
  });
  const validationSchema = {
  pgName: { 
    required: "PG Name is required",
    minLength: { value: 3, message: "Name must be at least 3 characters" }
  },
  pgAge: {
    required: "PG Age (Years) is required",
    min: { value: 1, message: "Min age is 1 year" },
    max: { value: 50, message: "Max age is 50 years" }
  },
  email: {
    required: "Owner Email is required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Invalid email format"
    }
  },
  phone: {
    required: "Contact number is required",
    pattern: {
      value: /^[0-9]{10}$/,
      message: "Must be exactly 10 digits"
    }
  },
  pgFile: {
    required: "Property photo is required",
    // validate logic for File objects
    validate: (files) => {
      if (!files[0]) return true;
      const validTypes = ['image/jpeg', 'image/png'];
      if (!validTypes.includes(files[0].type)) return "Only JPG/PNG allowed";
      if (files[0].size > 2 * 1024 * 1024) return "Max size is 2MB";
      return true;
    }
  },
  rent: {
    required: "Monthly rent is required",
    min: { value: 2000, message: "Rent must be at least ₹2000" }
  },
  meals: {
    required: "Select at least one meal option"
  }
  
};
 const submitHandler = (data) => {
    console.log("PG Finder Data:", data);
    alert("PG Property added successfully!");
  };
  return (
    <div style={{ maxWidth: '550px', margin: '30px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center' }}>Add PG Property</h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        
        {/* PG NAME */}
        <div style={{ marginBottom: '15px' }}>
          <label><b>PG Name:</b></label><br/>
          <input type='text' {...register('pgName', validationSchema.pgName)} style={{ width: '100%' }} />
          <p style={{ color: 'red', margin: '5px 0' }}>{errors.pgName?.message}</p>
        </div>

        {/* PG AGE (HOW OLD THE BUILDING IS) */}
        <div style={{ marginBottom: '15px' }}>
          <label><b>PG Building Age (Years):</b></label><br/>
          <input type='number' {...register('pgAge', validationSchema.pgAge)} style={{ width: '100%' }} />
          <p style={{ color: 'red', margin: '5px 0' }}>{errors.pgAge?.message}</p>
        </div>

        {/* EMAIL */}
        <div style={{ marginBottom: '15px' }}>
          <label><b>Owner Email:</b></label><br/>
          <input type='email' {...register('email', validationSchema.email)} style={{ width: '100%' }} />
          <p style={{ color: 'red', margin: '5px 0' }}>{errors.email?.message}</p>
        </div>

        {/* PHONE */}
        <div style={{ marginBottom: '15px' }}>
          <label><b>Contact Number:</b></label><br/>
          <input type='tel' {...register('phone', validationSchema.phone)} style={{ width: '100%' }} />
          <p style={{ color: 'red', margin: '5px 0' }}>{errors.phone?.message}</p>
        </div>

        {/* RENT */}
        <div style={{ marginBottom: '15px' }}>
          <label><b>Monthly Rent (₹):</b></label><br/>
          <input type='number' {...register('rent', validationSchema.rent)} style={{ width: '100%' }} />
          <p style={{ color: 'red', margin: '5px 0' }}>{errors.rent?.message}</p>
        </div>

        {/* MEAL CHECKBOXES */}
        <div style={{ marginBottom: '15px' }}>
          <label><b>Meals Provided:</b></label><br/>
          <input type='checkbox' value='breakfast' {...register('meals', validationSchema.meals)} /> Breakfast 
          <input type='checkbox' value='lunch' {...register('meals', validationSchema.meals)} /> Lunch 
          <input type='checkbox' value='dinner' {...register('meals', validationSchema.meals)} /> Dinner
          <p style={{ color: 'red', margin: '5px 0' }}>{errors.meals?.message}</p>
        </div>

        {/* FILE UPLOAD */}
        <div style={{ marginBottom: '15px' }}>
          <label><b>Upload PG Image:</b></label><br/>
          <input type='file' {...register('pgFile', validationSchema.pgFile)} />
          <p style={{ color: 'red', margin: '5px 0' }}>{errors.pgFile?.message}</p>
        </div>

        <button type='submit' style={{ width: '100%', padding: '10px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Submit Property
        </button>
      </form>
    </div>
  )
}
