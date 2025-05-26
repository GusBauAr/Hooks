import { useState } from 'react'
import './App.css'

function UseState() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>useState:</h1>
      <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>
          click
        </button>
      
    </>
  )
}
export default UseState
