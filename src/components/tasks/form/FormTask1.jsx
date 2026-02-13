import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

export const FormTask1 = () => {
  const { register, handleSubmit } = useForm();
  const [userData, setUserData] = useState({});
  const [isSubmited, setSubmited] = useState(false);

  const submitHandler = (data) => {
    console.log('data:',data);

    setUserData(data);
    setSubmited(true);
  };
  return (
    <div>
      <h1>FormTask1</h1>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>NAME</label>
          <input type="text" {...register("name")} />
        </div>
        <div>
          <label>GENDER</label> <br />
          MALE:
          <input type="radio" value="male" {...register("gender")} /> <br />
          FEMALE:
          <input type="radio" value="female" {...register("gender")} /> <br />
        </div>
        <div>
          <label>PHONE</label>
          <input type="tel" {...register("phone")} />
        </div>
        <div>
          <label>EMAIL</label>
          <input type="email" {...register("email")} />
        </div>
        <div>
          <label>PASSWORD</label>
          <input type="password" {...register("password")} />
        </div>
        <input type="submit"></input>
      </form>
      {isSubmited == true && (
        <div>
          <h1>OUTPUT</h1>
          <li>NAME:{userData.name}</li>
          <li>GENDER:{userData.gender}</li>
          <li>PHONE:{userData.phone}</li>
          <li>EMAIL:{userData.email}</li>
          <li>PASSWORD:{userData.password}</li>
        </div>
      )}
    </div>
  )
}
