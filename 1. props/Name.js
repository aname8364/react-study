import React from "react"

function Name({name}) {
    const style = {
        margin: 0
      }
      
    return (
        <>
        Hi {name}!
        {name == "world" && <p style={style}>name not specified.</p>}
        </>
    )
}

Name.defaultProps = {
    name: "world"
}

export default Name