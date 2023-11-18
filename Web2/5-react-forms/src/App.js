import { useState, useEffect } from 'react'
import './App.css';
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
    // code here
    console.log('errors', errors);
    console.log('touched', touched);
    console.log("useEffect hook working...");
  }, [])
  


  return (
    <div className="App">
      <header className="App-header">
        <h1>Forms in React</h1>

        <form noValidate onSubmit={formik.handleSubmit}>
          {/* //calls onSubmit */}
          <div>
            <input type='string' name='name' id='name' placeholder='Name' {...getFieldProps("name")} />
          </div>

          <div className='error'>{errors.name}</div>

          <div>
            <input type='email' name='email' id='email' placeholder='Email' {...getFieldProps("email")} />
          </div>
          <div className='error'>{errors.email}</div>

          <div>
            <input type='password' name='password' id='password' placeholder='Password' {...getFieldProps("password")} />
          </div>
          <div className='error'>{errors.password}</div>

          <button type='submit'>Login</button>
        </form>
      </header>
    </div>
  );
}

export default App;
