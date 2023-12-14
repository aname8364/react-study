import React, { useState, useEffect, useRef, useMemo } from "react"

function EffectTest({value}) {
  useEffect(() => {
    console.log(value + " enter")
    return () => {
      console.log("exit")
    }
  }, [value])
  return (
    <>
    {value.map((n, i) => {
      return (
        <b key={i}>{n}</b>
      )
    })}
    </>
  )
}

function App() {
  const [arr, setArr] = useState([])
  const [input, setInput] = useState("")

  const hiClick = () => {
    ++ref.current
    setArr(arr => [...arr, ref.current])
  }

  const edit = (e) => {
    setInput(e.target.value)
  }

  const ref = useRef(0)

  const updateCount = () => {
    console.log(`updateCount1: ${ref.current}`)
    return ref.current
  }

  const updateCount2 = (arr) => {
    console.log(`updateCount2: ${arr.length}`)
    return arr.length
  }

  const count = useMemo(() => updateCount2(arr), [arr])

  return (
    <div>
    app
    <button onClick={hiClick}>hi</button>
    <p><input onChange={edit} value={input}/></p>
    <p><EffectTest value={arr}/></p>
    <p>count: {updateCount()}</p>
    <p>count: {count}</p>
    </div>
  )
}

export default App 