import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  let addValue = () => {
    setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1) won't make the counter to add 4 more if the "setCounter(counter + 1)" is printed four/any more times, it'll just send the bunch of the same functions to the 'Render' and will render for only once and will give the output = added '1'. To add four more even after writing it for four times, check below !

    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1) // now it will give the output with plus four/any added !!, as it has now been sent in 'Bunch'.
  } 

  let removeValue = () => {
    if(counter > 0)
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>Hello There Counter ! : {counter}</h1>

    <button onClick={addValue}>Add Value</button>
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
