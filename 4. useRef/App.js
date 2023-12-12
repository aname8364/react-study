import React, { useState, useRef } from "react"

function App() {
  const [message, setMessage] = useState("")
  const appRef = useRef()

  const updateMessage = (e) => {
    setMessage(e.target.value)
  }

  const buttonClick = () => {
    message.trim() === "" ? appRef.current.focus() : alert(message)
  }

  return (
    <>
    <input
      name = "message"
      placeholder = "Enter message"
      ref = {appRef}
      value = {message}

      onChange = {updateMessage}
    />
    <button
      onClick = {buttonClick}
    >
      hi
    </button>
    </>
  )
}

export default App