import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './components/card'
import Card2 from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Anish",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

      {/* <Card passingObject = {username:"Zeref"} passingArray = [1,2,3]} /> ////Error, can't pass directly with this way. */}
      {/* <Card passingObject = {myObj} passingArray = {newArr} /> //////works, can use this way to pass array and objects. */}
      <Card1 username="Mars" btnText="click here" />
      <Card1 username="Jupiter" btnText='I am button' />
    </>
  )
}

export default App