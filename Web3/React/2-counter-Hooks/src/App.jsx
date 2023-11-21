import { useState } from 'react'

function App() {

  const [counter, setCounter] = useState(15)

  //let counter = 15

  const addValue = () => {
    setCounter(counter + 1)

  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>useState hook in react</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Increase value {counter}</button>
      <br />
      <button
        onClick={() => removeValue()}
      >Decrease value {counter}</button>
      <p>Current Value: {counter}</p>
    </>
  )
}

export default App