import { useState, useEffect } from 'react'
// import './App.css';
import * as Yup from 'yup'
import { useFormik } from 'formik'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')


  const userSchema = Yup.object({
    name: Yup.string().required().min(2, 'Name must be more than 2 characters.'),
    email: Yup.string().email().required(),
    password: Yup.string().required().min(5, 'Password must be more than 5 characters.').max(15, 'Password should be smaller than 15 characters.'),
  })


  const submitForm = (e) => {
    e.preventDefault();
    console.log({ email, password });
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      console.log(values);
      //validated values, can be used for API calls
    },
  })

  const { errors, touched, getFieldProps } = formik;

  useEffect(() => {
    console.log("useEffect hook working...");
  }, [])



  return (
    <div className="text-center">
      <header className="flex flex-col items-center justify-center bg-slate-800 h-screen text-white">
        <h1>Forms in React</h1>

        <form noValidate onSubmit={formik.handleSubmit}>
          <div>
            <input type='string' name='name' id='name' className='p-2.5 m-1 text-black' placeholder='Name' {...getFieldProps("name")} />
          </div>

          <div className='text-red-500 text-sm'>{errors.name}</div>

          <div>
            <input type='email' className='p-2.5 m-1 text-black' name='email' id='email' placeholder='Email' {...getFieldProps("email")} />
          </div>
          <div className='text-red-500 text-sm'>{errors.email}</div>

          <div>
            <input type='password' className='p-2.5 m-1 text-black' name='password' id='password' placeholder='Password' {...getFieldProps("password")} />
          </div>
          <div className='text-red-500 text-sm'>{errors.password}</div>

          <button className='bg-cyan-300 p-2.5 m-1 w-full' type='submit'>Login</button>
        </form>
      </header>
    </div>
  );
}

export default App;
