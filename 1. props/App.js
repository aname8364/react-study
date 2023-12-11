import React from "react"
import Name from "./Name"

function App() {
  const style = {
    marginBottom: 20
  }

  return (
    <>
    <h1>MainApp</h1> 

    <p style={style}><Name/></p>
    <p style={style}><Name name="aname"/></p>
    <p style={style}><Name name="world"/></p>
    <p style={style}><Name name="react"/></p>
    </>
  )
}

export default App