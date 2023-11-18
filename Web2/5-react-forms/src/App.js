import logo from './logo.svg';
import {useState} from 'react'
import './App.css';

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitForm =(e)=>{
    e.preventDefault();
    console.log({email,password});

  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Forms in React</h1>
        <form onSubmit={submitForm}>
          <div>
            <input type='email' onChange={e=>setEmail(e.target.value)} name='email' id='email' placeholder='Email'/>
          </div>
          <div>
            <input type='password' onChange={e=>setPassword(e.target.value)}name='password' id='password' placeholder='Password'/>
          </div>
          <button type='submit'>Login</button>
        </form>
      </header>
    </div>
  );
}

export default App;
