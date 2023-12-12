import React, {useState} from "react"

function App() {
  const [value, setValue] = useState("")
  const [count, setCount] = useState(0)

  const onChange = (e) => {
    setValue(e.target.value)
  }

  const onAlertClick = () => {
    setCount((i) => i+1)
    alert(value + " " + (count+1))
  }

  const onResetClick = () => {
    setValue("")
    setCount(0)
  }

  return (
    <>
    <h1>InputExample</h1>
    <input onChange={onChange} value={value}/>
    <button onClick={onAlertClick}>Alert</button>
    <button onClick={onResetClick}>Reset</button>
    <p>Input: {value} count: {count}</p>
    </>
  )
}

export default App