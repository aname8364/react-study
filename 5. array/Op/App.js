import React, { useState } from "react"
import ArrayView from "./ArrayView"

function App() {
  const [arr, setArr] = useState([
    {
      name: "aname",
      num: 123,
      active: true
    },
    {
      name: "user",
      num: 500,
      active: false
    }
  ])

  const [input, setInput] = useState("")

  const add = () => {
    if (arr.some(v => v.name === input)) {
      alert("Invalid")
      return
    }

    const newData = {
      name: input,
      num: 10,
      active: false
    }
    setArr(arr => [...arr, newData])
  }

  const remove = () => {
    setArr(arr.filter(v => 
      v.name !== input
    ))
  }

  const update = (name) => {
    setArr(arr.map(v => {
      return {...v, active: v.name === name}
    }))
  }

  const editInput = (e) => {
    setInput(e.target.value)
  }

  const setValue = () => {
    setArr(arr.map(v =>
      v.active ? {...v, num: !isNaN(input)? input: 0 } : v
    ))
  }
  
  return (
    <div>
      <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
      <input onChange={editInput} value={input}/>
      <button onClick={setValue}>Change Value</button>
      <ArrayView array={arr} update={update}/>
    </div>
  )
}

export default App