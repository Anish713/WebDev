import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [name, setName] = useState('Learn React')
const buttonClick=()=>{
  setName('Learn React Hooks')
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          className="App-link"
          onClick={buttonClick}
        >
         {name}
        </button>
      </header>
    </div>
  );
}

export default App;
