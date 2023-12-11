import React, {useState} from "react"

function App() {
  const [isClicked, setIsClicked] = useState(false)

  const buttonClick = () => {
    setIsClicked(true)
  }

  return (
    <>
    <h1>MainApp</h1> 

    <button onClick={buttonClick}>Button1</button>

    {isClicked && <>Clicked</>}
    </>
  )
}

export default App