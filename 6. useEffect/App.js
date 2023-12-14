import React, { useState, useEffect, useRef } from "react"

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

  const hiClick = () => {
    ++ref.current
    setArr(arr => [...arr, ref.current])
  }

  const ref = useRef(0)

  return (
    <div>
    app
    <button onClick={hiClick}>hi</button>
    <EffectTest value={arr}/>
    </div>
  )
}

export default App 